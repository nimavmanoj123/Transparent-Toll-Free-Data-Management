// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TollFreeNumberRegistry {
    struct TollFreeNumber {
        address owner;
        string phoneNumber;
        string serviceProvider;
        uint256 monthlyFee;
    }

    mapping(uint256 => TollFreeNumber) public tollFreeNumbers;
    uint256 public numberCount;

    event TollFreeNumberAdded(uint256 numberId, address owner, string phoneNumber, string serviceProvider, uint256 monthlyFee);
    event TollFreeNumberUpdated(uint256 numberId, string phoneNumber, string serviceProvider, uint256 monthlyFee);

    modifier onlyOwner(uint256 _numberId) {
        require(tollFreeNumbers[_numberId].owner == msg.sender, "Only the owner can perform this action");
        _;
    }

    function addTollFreeNumber(string memory _phoneNumber, string memory _serviceProvider, uint256 _monthlyFee) external {
        numberCount++;
        tollFreeNumbers[numberCount] = TollFreeNumber(msg.sender, _phoneNumber, _serviceProvider, _monthlyFee);
        emit TollFreeNumberAdded(numberCount, msg.sender, _phoneNumber, _serviceProvider, _monthlyFee);
    }

    function updateTollFreeNumber(uint256 _numberId, string memory _phoneNumber, string memory _serviceProvider, uint256 _monthlyFee) external onlyOwner(_numberId) {
        TollFreeNumber storage tollFreeNumber = tollFreeNumbers[_numberId];
        tollFreeNumber.phoneNumber = _phoneNumber;
        tollFreeNumber.serviceProvider = _serviceProvider;
        tollFreeNumber.monthlyFee = _monthlyFee;
        emit TollFreeNumberUpdated(_numberId, _phoneNumber, _serviceProvider, _monthlyFee);
    }

    function getTollFreeNumberDetails(uint256 _numberId) external view returns (address owner, string memory phoneNumber, string memory serviceProvider, uint256 monthlyFee) {
        TollFreeNumber memory tollFreeNumber = tollFreeNumbers[_numberId];
        return (tollFreeNumber.owner, tollFreeNumber.phoneNumber, tollFreeNumber.serviceProvider, tollFreeNumber.monthlyFee);
    }
}