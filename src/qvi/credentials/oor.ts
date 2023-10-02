export class OORvLEICredentialData {
    readonly LEI: string;
    readonly personLegalName: string;
    readonly officialOrganizationalRole: string;

    constructor(
        LEI: string,
        personLegalName: string,
        officialOrganizationalRole: string
    ) {
        this.LEI = LEI;
        this.personLegalName = personLegalName;
        this.officialOrganizationalRole = officialOrganizationalRole;
    }
}

export interface OORAuthEdges {
    d: string;
    auth: OORvLEIAuthEdge;
}

export class OORvLEIAuthEdge {
    readonly n: string; // AID of the issuing Legal Entity
    readonly s: string = 'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E';
    readonly o: string = 'I2I';

    constructor(legalEntityAID: string) {
        this.n = legalEntityAID;
    }
}
