// SPDX-License-Identifier: MIT LICENSE

//                              ***************
//                       *****************************
//                  ***************************************
//               *********************************************
//            ***************************************************
//          *******************************************************
//        ************************,,,**,***,***,*********************
//       ***********    *****,*,*,,,,*,**,,,,,,*,**,***    ***********
//     ********,,,,***      ,,,,,,,*,,,**,,,***,,,,      ************,*/
//    ************,,,,,      **(((((((((((((((((*,      *************,//(
//   *********,,,,**,**       (((((((((((((((((((       ***********,*///((
//   ******,,,,,,*,***          (((((((((((((((          *********,*///(((
//  *****,,,,,*,******           (((((((((((((           *******,*//*///(((
//  ****,,*,**,,,*****     (      (((((((((((      (     ****,,**///***///*
//  *,*,,,*,,,*,*****      (((      (((((((      (((      *,,***///////////
//  **,,**,**********      ((((      (((((      ((((      ,******//////////
//  *,,**************     ((((((      (((      ((((((     ,*******///////**
//   ,**,***********      *((((((             ((((((,      ***//////***,,*
//    *,************      ***((((((         ((((((,,,      /******,,*****
//    ,*************     *******((((       ((((,,,****     ,,,,*****,,***
//     ,***********      ************     ,,,,,,***,,,      ****,******.
//       **********  ****************** ,,,,,,,,,,********  *******,,*
//        *****,**************************************,,*******,,,*,*
//          *************************************,*********,,**,*/*
//             *****************************,**********,,,,**/*/
//               **********************************,,*****,/*/
//                   **************,**********,,,*****,/*/
//                        ***,************,,,******/*
//                                  ,,,,**,

pragma solidity 0.8.4;

import "https://github.com/cikejoae/mbgstaking/blob/main/OSISTokens.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MBStaking is Ownable, IERC721Receiver {
    uint256 public totalStaked;

    // struct to store a stake's token, owner, and earning values
    struct Stake {
        uint24 tokenId;
        uint48 timestamp;
        address owner;
    }

    event NFTStaked(address owner, uint256 tokenId, uint256 value);
    event NFTUnstaked(address owner, uint256 tokenId, uint256 value);
    event Claimed(address owner, uint256 amount);

    // reference to the Block NFT contract
    ERC721Enumerable nft;
    OSIS token;

    // maps tokenId to stake
    mapping(uint256 => Stake) public vault;

    mapping(address => uint256) public vaultTokenCount;
    mapping(uint256 => uint256) public vaultTokenIndex;
    mapping(address => mapping(uint256 => uint256)) public vaultToken;

    constructor(ERC721Enumerable _nft, OSIS _token) {
        nft = _nft;
        token = _token;
    }

    function saveUserStakedTokenId(uint256 tokenId) internal {
        uint256 vaultId = vaultTokenCount[msg.sender];
        vaultToken[msg.sender][vaultId] = tokenId;
        vaultTokenIndex[tokenId] = vaultId;
        vaultTokenCount[msg.sender]++;
    }

    function removeUserStakedTokenId(uint256 tokenId) internal {
        uint256 lastTokenIndex = vaultTokenCount[msg.sender] - 1;
        uint256 tokenIndex = vaultTokenIndex[tokenId];

        if (tokenIndex != lastTokenIndex) {
            uint256 lastTokenId = vaultToken[msg.sender][lastTokenIndex];

            vaultToken[msg.sender][tokenIndex] = lastTokenId;
            vaultTokenIndex[lastTokenId] = tokenIndex;
        }

        delete vaultTokenIndex[tokenId];
        delete vaultToken[msg.sender][lastTokenIndex];
        vaultTokenCount[msg.sender]--;
    }

    function stake(uint256[] calldata tokenIds) external {
        uint256 tokenId;
        totalStaked += tokenIds.length;
        for (uint256 i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            require(nft.ownerOf(tokenId) == msg.sender, "not your token");
            require(vault[tokenId].tokenId == 0, "already staked");

            nft.transferFrom(msg.sender, address(this), tokenId);
            emit NFTStaked(msg.sender, tokenId, block.timestamp);

            saveUserStakedTokenId(tokenId);

            vault[tokenId] = Stake({
                owner: msg.sender,
                tokenId: uint24(tokenId),
                timestamp: uint48(block.timestamp)
            });
        }
    }

    function _unstakeMany(address account, uint256[] calldata tokenIds)
        internal
    {
        uint256 tokenId;
        totalStaked -= tokenIds.length;
        for (uint256 i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            Stake memory staked = vault[tokenId];
            require(staked.owner == msg.sender, "not an owner");

            removeUserStakedTokenId(tokenId);
            delete vault[tokenId];

            emit NFTUnstaked(account, tokenId, block.timestamp);
            nft.transferFrom(address(this), account, tokenId);
        }
    }

    function claim(uint256[] calldata tokenIds) external {
        _claim(msg.sender, tokenIds, false);
    }

    function claimForAddress(address account, uint256[] calldata tokenIds)
        external
    {
        _claim(account, tokenIds, false);
    }

    function unstake(uint256[] calldata tokenIds) external {
        _claim(msg.sender, tokenIds, true);
    }

    // TOKEN REWARDS CALCULATION
    // MAKE SURE YOU CHANGE THE VALUE ON BOTH CLAIM AND EARNINGINFO FUNCTIONS.
    // Find the following line and update accordingly based on how much you want
    // to reward users with ERC-20 reward tokens.
    // I hope you get the idea based on the example.
    // rewardmath = 100 ether .... (This gives 1 token per day per NFT staked to the staker)
    // rewardmath = 200 ether .... (This gives 2 tokens per day per NFT staked to the staker)
    // rewardmath = 500 ether .... (This gives 5 tokens per day per NFT staked to the staker)
    // rewardmath = 1000 ether .... (This gives 10 tokens per day per NFT staked to the staker)

    function _claim(
        address account,
        uint256[] calldata tokenIds,
        bool _unstake
    ) internal {
        uint256 tokenId;
        uint256 earned = 0;
        uint256 rewardmath = 0;

        for (uint256 i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            Stake memory staked = vault[tokenId];
            require(staked.owner == account, "not an owner");
            uint256 stakedAt = staked.timestamp;
            rewardmath = (100 ether * (block.timestamp - stakedAt)) / 86400;
            earned = rewardmath / 100;

            saveUserStakedTokenId(tokenId);

            vault[tokenId] = Stake({
                owner: account,
                tokenId: uint24(tokenId),
                timestamp: uint48(block.timestamp)
            });
        }
        if (earned > 0) {
            token.mint(account, earned);
        }
        if (_unstake) {
            _unstakeMany(account, tokenIds);
        }
        emit Claimed(account, earned);
    }

    function earningInfo(address account, uint256[] calldata tokenIds)
        external
        view
        returns (uint256[1] memory info)
    {
        uint256 tokenId;
        uint256 earned = 0;
        uint256 rewardmath = 0;

        for (uint256 i = 0; i < tokenIds.length; i++) {
            tokenId = tokenIds[i];
            Stake memory staked = vault[tokenId];
            require(staked.owner == account, "not an owner");
            uint256 stakedAt = staked.timestamp;
            rewardmath = (100 ether * (block.timestamp - stakedAt)) / 86400;
            earned = rewardmath / 100;
        }
        if (earned > 0) {
            return [earned];
        }
    }

    function balanceOf(address account) public view returns (uint256) {
        return vaultTokenCount[account];
    }

    function tokensOfOwner(address account)
        public
        view
        returns (uint256[] memory ownerTokens)
    {
        uint256 count = vaultTokenCount[account];
        ownerTokens = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            ownerTokens[i] = vaultToken[account][i];
        }
    }

    function onERC721Received(
        address,
        address from,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        require(from == address(0x0), "Cannot send nfts to Vault directly");
        return IERC721Receiver.onERC721Received.selector;
    }
}
