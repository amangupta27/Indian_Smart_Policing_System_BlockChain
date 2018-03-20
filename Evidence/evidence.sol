pragma solidity ^0.4.18;

contract evidence{
    mapping (string=>bytes32[]) evidence_links;
    function getEvidenceLinks (string fir) public returns (bytes32[] ){
        return evidence_links[fir];
    }
    function addEvidence(string fir ,bytes32 evidence_link)public  {
        bytes32[] storage str = evidence_links[fir];
        str.push(evidence_link);
    }
}
