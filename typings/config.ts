export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type IdentifierType = 'license' | 'xbox' | 'discord' | 'steam';

export interface PolyZone {
  position: {
    x: number;
    y: number;
    z: number;
  };
  length: number;
  width: number;
  heading: number;
  minZ: number;
  maxZ: number;
}
export interface ResourceConfig {
  general: {
    language: string;
    currency: string;
    identifierType: string;
  };
  frameworkIntegration: {
    enabled: boolean;
    resource: string;
  };
  database: {
    profileQueries: boolean;
    shouldSync: boolean;
  };
  prices: {
    newAccount: number;
  };
  accounts: {
    startAmount: number;
    clearingNumber: string | number;
    maximumNumberOfAccounts: number;
  };
  cash: {
    startAmount: number;
  };
  atms: {
    distance: number;
    props: number[];
    withdrawOptions: number[];
  };
  target: {
    enabled: boolean;
    bankZones: PolyZone[];
    type: string;
  };
  debug: {
    level: string;
    mockLicenses: boolean;
  };
}
