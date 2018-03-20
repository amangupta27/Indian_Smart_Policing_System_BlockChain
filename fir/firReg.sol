pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;
contract x {

struct firDetails {
    uint firNo;
    bytes32 date;
    bytes32 occDate;
    bytes32 occTime;
    bytes32 compName;
    bytes32 compAddress;
    bytes32 compContact;
    bytes32 accusedName;
    bytes32 accusedAddress;
    bytes32 incidentDetails;
    bytes32 otherDetails;
  }

firDetails public _firDetail;

mapping (uint => firDetails[] )public FIRs;

function addFIR(uint _firNo,bytes32 _date,bytes32 _occDate,
    bytes32 _occTime, bytes32 _compName, bytes32 _compAddress,
    bytes32 _compContact,bytes32 _accusedName, bytes32 _accusedAddress,
    bytes32 _incidentDetails,bytes32 _otherDetails) public{

      _firDetail = firDetails(_firNo,_date,_occDate,_occTime,_compName,_compAddress,
                                        _compContact, _accusedName, _accusedAddress,_incidentDetails,_otherDetails);
      FIRs[_firNo].push(_firDetail);
    }
function getFirDetail(uint _firNo,uint _index)view public returns(bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32){
    firDetails storage firDetail = FIRs[_firNo][_index];
    return (firDetail.date,firDetail.occDate,firDetail.occTime,firDetail.compName,firDetail.compAddress,firDetail.compContact,
            firDetail.accusedName,firDetail.accusedAddress,firDetail.incidentDetails,firDetail.otherDetails);
}
}
