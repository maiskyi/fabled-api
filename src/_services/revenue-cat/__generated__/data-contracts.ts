/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AmazonApp {
  /** Amazon type details */
  amazon?: {
    /**
     * The package name of the app
     * @minLength 1
     * @maxLength 256
     */
    package_name: string;
  };
}

export interface AmazonAppCreate {
  /** Amazon type details. Should only be used when type is amazon. */
  amazon?: {
    /**
     * The package name of the app
     * @minLength 1
     * @maxLength 256
     */
    package_name: string;
    /** Your Amazon Developer Identity Shared Key */
    shared_secret?: string;
  };
}

export type App = {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'app';
  /**
   * The id of the app
   * @minLength 1
   * @maxLength 255
   * @example "app1a2b3c4"
   */
  id: string;
  /**
   * The name of the app
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * The date when the app was created in ms since epoch
   * @example 1658399423658
   */
  created_at: number;
  /**
   * The platform of the app
   * @example "app_store"
   */
  type: 'amazon' | 'app_store' | 'mac_app_store' | 'play_store' | 'stripe' | 'rc_billing' | 'roku';
  /**
   * The id of the project
   * @minLength 1
   * @maxLength 255
   * @example "proj1a2b3c4"
   */
  project_id: string;
} & AmazonApp &
  AppStoreApp &
  MacAppStoreApp &
  PlayStoreApp &
  StripeApp &
  RCBillingApp &
  RokuApp;

export type AppCreate = {
  /**
   * The name of the app
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * The platform of the app.
   * Mac App Store is disabled by default. See [Legacy Mac Apps](https://www.revenuecat.com/docs/legacy-mac-apps) for more details.
   */
  type: 'amazon' | 'app_store' | 'mac_app_store' | 'play_store' | 'stripe' | 'rc_billing' | 'roku';
} & AmazonAppCreate &
  AppStoreAppCreate &
  MacAppStoreAppCreate &
  PlayStoreAppCreate &
  StripeAppCreate &
  RCBillingAppCreate &
  RokuAppCreate;

export interface AppStoreApp {
  /** App Store type details */
  app_store?: {
    /**
     * The bundle ID of the app
     * @minLength 1
     * @maxLength 256
     */
    bundle_id: string;
  };
}

export interface AppStoreAppCreate {
  /** App Store type details. Should only be used when type is app_store. */
  app_store?: {
    /**
     * The bundle ID of the app
     * @minLength 1
     * @maxLength 256
     */
    bundle_id: string;
    /**
     * The shared secret of the app
     * @minLength 32
     * @maxLength 32
     */
    shared_secret?: string;
    /**
     * PKCS /#8 In App Key downloaded from App Store Connect in PEM format. Copy the contents
     * of the file in this field. See instructions on how to get it in:
     * https://www.revenuecat.com/docs/in-app-purchase-key-configuration
     * @minLength 1
     * @maxLength 4500
     */
    subscription_private_key: string;
    /**
     * In App Key id. The ID of the downloaded in app key. You can get it from App Store Connect
     * @minLength 1
     * @maxLength 32
     */
    subscription_key_id: string;
    /**
     * The key Issuer id. See instructions on how to obtain this in: https://www.revenuecat.com/docs/in-app-purchase-key-configuration#3-providing-the-issuer-id-to-revenuecat
     * @minLength 1
     * @maxLength 36
     */
    subscription_key_issuer: string;
  };
}

/**
 * The country that the object is associated with, in ISO alpha 2 code
 * @example "US"
 */
export enum Country {
  AF = 'AF',
  AL = 'AL',
  DZ = 'DZ',
  AS = 'AS',
  AD = 'AD',
  AO = 'AO',
  AI = 'AI',
  AQ = 'AQ',
  AG = 'AG',
  AR = 'AR',
  AM = 'AM',
  AW = 'AW',
  AU = 'AU',
  AT = 'AT',
  AZ = 'AZ',
  BS = 'BS',
  BH = 'BH',
  BD = 'BD',
  BB = 'BB',
  BY = 'BY',
  BE = 'BE',
  BZ = 'BZ',
  BJ = 'BJ',
  BM = 'BM',
  BT = 'BT',
  BO = 'BO',
  BQ = 'BQ',
  BA = 'BA',
  BW = 'BW',
  BV = 'BV',
  BR = 'BR',
  IO = 'IO',
  BN = 'BN',
  BG = 'BG',
  BF = 'BF',
  BI = 'BI',
  CV = 'CV',
  KH = 'KH',
  CM = 'CM',
  CA = 'CA',
  KY = 'KY',
  CF = 'CF',
  TD = 'TD',
  CL = 'CL',
  CN = 'CN',
  CX = 'CX',
  CC = 'CC',
  CO = 'CO',
  KM = 'KM',
  CD = 'CD',
  CG = 'CG',
  CK = 'CK',
  CR = 'CR',
  HR = 'HR',
  CU = 'CU',
  CW = 'CW',
  CY = 'CY',
  CZ = 'CZ',
  CI = 'CI',
  DK = 'DK',
  DJ = 'DJ',
  DM = 'DM',
  DO = 'DO',
  EC = 'EC',
  EG = 'EG',
  SV = 'SV',
  GQ = 'GQ',
  ER = 'ER',
  EE = 'EE',
  SZ = 'SZ',
  ET = 'ET',
  FK = 'FK',
  FO = 'FO',
  FJ = 'FJ',
  FI = 'FI',
  FR = 'FR',
  GF = 'GF',
  PF = 'PF',
  TF = 'TF',
  GA = 'GA',
  GM = 'GM',
  GE = 'GE',
  DE = 'DE',
  GH = 'GH',
  GI = 'GI',
  GR = 'GR',
  GL = 'GL',
  GD = 'GD',
  GP = 'GP',
  GU = 'GU',
  GT = 'GT',
  GG = 'GG',
  GN = 'GN',
  GW = 'GW',
  GY = 'GY',
  HT = 'HT',
  HM = 'HM',
  VA = 'VA',
  HN = 'HN',
  HK = 'HK',
  HU = 'HU',
  IS = 'IS',
  IN = 'IN',
  ID = 'ID',
  IR = 'IR',
  IQ = 'IQ',
  IE = 'IE',
  IM = 'IM',
  IL = 'IL',
  IT = 'IT',
  JM = 'JM',
  JP = 'JP',
  JE = 'JE',
  JO = 'JO',
  KZ = 'KZ',
  KE = 'KE',
  KI = 'KI',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KG = 'KG',
  LA = 'LA',
  LV = 'LV',
  LB = 'LB',
  LS = 'LS',
  LR = 'LR',
  LY = 'LY',
  LI = 'LI',
  LT = 'LT',
  LU = 'LU',
  MO = 'MO',
  MG = 'MG',
  MW = 'MW',
  MY = 'MY',
  MV = 'MV',
  ML = 'ML',
  MT = 'MT',
  MH = 'MH',
  MQ = 'MQ',
  MR = 'MR',
  MU = 'MU',
  YT = 'YT',
  MX = 'MX',
  FM = 'FM',
  MD = 'MD',
  MC = 'MC',
  MN = 'MN',
  ME = 'ME',
  MS = 'MS',
  MA = 'MA',
  MZ = 'MZ',
  MM = 'MM',
  NA = 'NA',
  NR = 'NR',
  NP = 'NP',
  NL = 'NL',
  NC = 'NC',
  NZ = 'NZ',
  NI = 'NI',
  NE = 'NE',
  NG = 'NG',
  NU = 'NU',
  NF = 'NF',
  MP = 'MP',
  NO = 'NO',
  OM = 'OM',
  PK = 'PK',
  PW = 'PW',
  PS = 'PS',
  PA = 'PA',
  PG = 'PG',
  PY = 'PY',
  PE = 'PE',
  PH = 'PH',
  PN = 'PN',
  PL = 'PL',
  PT = 'PT',
  PR = 'PR',
  QA = 'QA',
  MK = 'MK',
  RO = 'RO',
  RU = 'RU',
  RW = 'RW',
  RE = 'RE',
  BL = 'BL',
  SH = 'SH',
  KN = 'KN',
  LC = 'LC',
  MF = 'MF',
  PM = 'PM',
  VC = 'VC',
  WS = 'WS',
  SM = 'SM',
  ST = 'ST',
  SA = 'SA',
  SN = 'SN',
  RS = 'RS',
  SC = 'SC',
  SL = 'SL',
  SG = 'SG',
  SX = 'SX',
  SK = 'SK',
  SI = 'SI',
  SB = 'SB',
  SO = 'SO',
  ZA = 'ZA',
  GS = 'GS',
  SS = 'SS',
  ES = 'ES',
  LK = 'LK',
  SD = 'SD',
  SR = 'SR',
  SJ = 'SJ',
  SE = 'SE',
  CH = 'CH',
  SY = 'SY',
  TW = 'TW',
  TJ = 'TJ',
  TZ = 'TZ',
  TH = 'TH',
  TL = 'TL',
  TG = 'TG',
  TK = 'TK',
  TO = 'TO',
  TT = 'TT',
  TN = 'TN',
  TR = 'TR',
  TM = 'TM',
  TC = 'TC',
  TV = 'TV',
  UG = 'UG',
  UA = 'UA',
  AE = 'AE',
  GB = 'GB',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VU = 'VU',
  VE = 'VE',
  VN = 'VN',
  VG = 'VG',
  VI = 'VI',
  WF = 'WF',
  EH = 'EH',
  YE = 'YE',
  ZM = 'ZM',
  ZW = 'ZW',
  AX = 'AX',
}

/**
 * ISO 4217 currency code
 * @example "USD"
 */
export enum Currency {
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ANG = 'ANG',
  AOA = 'AOA',
  ARS = 'ARS',
  AUD = 'AUD',
  AWG = 'AWG',
  AZN = 'AZN',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BSD = 'BSD',
  BTC = 'BTC',
  BTN = 'BTN',
  BWP = 'BWP',
  BYN = 'BYN',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLF = 'CLF',
  CLP = 'CLP',
  CNH = 'CNH',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CUC = 'CUC',
  CUP = 'CUP',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  EUR = 'EUR',
  FJD = 'FJD',
  FKP = 'FKP',
  GBP = 'GBP',
  GEL = 'GEL',
  GGP = 'GGP',
  GHS = 'GHS',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GTQ = 'GTQ',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  IMP = 'IMP',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JEP = 'JEP',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KMF = 'KMF',
  KPW = 'KPW',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRU = 'MRU',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SLL = 'SLL',
  SOS = 'SOS',
  SRD = 'SRD',
  SSP = 'SSP',
  STD = 'STD',
  STN = 'STN',
  SVC = 'SVC',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  USD = 'USD',
  UYU = 'UYU',
  UZS = 'UZS',
  VEF = 'VEF',
  VES = 'VES',
  VND = 'VND',
  VUV = 'VUV',
  WST = 'WST',
  XAF = 'XAF',
  XAG = 'XAG',
  XAU = 'XAU',
  XCD = 'XCD',
  XDR = 'XDR',
  XOF = 'XOF',
  XPD = 'XPD',
  XPF = 'XPF',
  XPT = 'XPT',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMW = 'ZMW',
  ZWL = 'ZWL',
}

export interface Customer {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'customer';
  /**
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  id: string;
  /**
   * ID of the project to which the customer belongs
   * @minLength 1
   * @maxLength 20
   * @example "proj1ab2c3d4"
   */
  project_id: string;
  /**
   * The first time the customer was seen
   * @example 1658399423658
   */
  first_seen_at: number;
  /**
   * The last time the customer was seen
   * @example 1658399423658
   */
  last_seen_at: number | null;
  active_entitlements?: ListCustomerActiveEntitlements;
  /** The experiment enrollment object */
  experiment?: ExperimentEnrollment | null;
}

export interface CustomerAlias {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'customer.alias';
  /**
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  id: string;
  /**
   * The time when the alias was created
   * @example 1658399423658
   */
  created_at: number;
}

/**
 * @maxLength 40
 * @pattern ^[a-zA-Z][a-zA-Z0-9_-]*$
 * @example "opt_into_marketing"
 */
export type CustomerAttributeCustomName = string;

/** @example "$email" */
export enum CustomerAttributeReservedName {
  Ad = '$ad',
  AdGroup = '$adGroup',
  AdjustId = '$adjustId',
  AirshipChannelId = '$airshipChannelId',
  AmazonAdId = '$amazonAdId',
  AmplitudeDeviceId = '$amplitudeDeviceId',
  AmplitudeUserId = '$amplitudeUserId',
  ApnsTokens = '$apnsTokens',
  AppsflyerId = '$appsflyerId',
  AppsflyerSharingFilter = '$appsflyerSharingFilter',
  AttConsentStatus = '$attConsentStatus',
  BranchId = '$branchId',
  BrazeAliasLabel = '$brazeAliasLabel',
  BrazeAliasName = '$brazeAliasName',
  Campaign = '$campaign',
  ClevertapId = '$clevertapId',
  Creative = '$creative',
  DisplayName = '$displayName',
  Email = '$email',
  FbAnonId = '$fbAnonId',
  FcmTokens = '$fcmTokens',
  FirebaseAppInstanceId = '$firebaseAppInstanceId',
  GpsAdId = '$gpsAdId',
  Idfa = '$idfa',
  Idfv = '$idfv',
  Ip = '$ip',
  IterableCampaignId = '$iterableCampaignId',
  IterableTemplateId = '$iterableTemplateId',
  IterableUserId = '$iterableUserId',
  Keyword = '$keyword',
  KochavaDeviceId = '$kochavaDeviceId',
  MediaSource = '$mediaSource',
  MixpanelDistinctId = '$mixpanelDistinctId',
  MparticleId = '$mparticleId',
  OnesignalId = '$onesignalId',
  OnesignalUserId = '$onesignalUserId',
  PhoneNumber = '$phoneNumber',
  PosthogUserId = '$posthogUserId',
  SegmentId = '$segmentId',
  TenjinId = '$tenjinId',
  DeviceVersion = '$deviceVersion',
}

export interface CustomerEntitlement {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'customer.active_entitlement';
  /**
   * ID of the entitlement granted to the customer
   * @minLength 1
   * @maxLength 255
   * @example "entla1b2c3d4e5"
   */
  entitlement_id: string;
  /**
   * The date after which the access to the entitlement expires in ms since epoch
   * @example 1658399423658
   */
  expires_at: number | null;
}

export interface DeletedObject {
  /** The type of the deleted object */
  object: 'app' | 'customer' | 'entitlement' | 'offering' | 'package' | 'product';
  /** The ID of the deleted object */
  id: string;
  /**
   * The date when the object was deleted in ms since epoch
   * @example 1658399423658
   */
  deleted_at: number;
}

export enum EligibilityCriteria {
  All = 'all',
  GoogleSdkLt6 = 'google_sdk_lt_6',
  GoogleSdkGe6 = 'google_sdk_ge_6',
}

export interface Entitlement {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'entitlement';
  /**
   * ID of the project to which the entitlement belongs
   * @minLength 1
   * @maxLength 20
   * @example "proj1ab2c3d4"
   */
  project_id: string;
  /**
   * The id of the entitlement
   * @minLength 1
   * @maxLength 255
   * @example "entla1b2c3d4e5"
   */
  id: string;
  /**
   * A custom identifier of the entitlement
   * @minLength 1
   * @maxLength 200
   * @example "premium"
   */
  lookup_key: string;
  /**
   * The display name of the entitlement
   * @minLength 1
   * @maxLength 1500
   * @example "Premium"
   */
  display_name: string;
  /**
   * The date when the entitlement was created in ms since epoch
   * @example 1658399423658
   */
  created_at: number;
  /**
   * ProductsList
   * List of products attached to the entitlement
   */
  products?: {
    /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
    object: 'list';
    /** Details about each object. */
    items: Product[];
    /**
     * URL to access the next page of the Entitlement's products. If not present / null, there is no next page
     * @example "/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac"
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     * @maxLength 5000
     * @example "/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products"
     */
    url: string;
  };
}

/**
 * The store environment
 * @example "production"
 */
export enum Environment {
  Production = 'production',
  Sandbox = 'sandbox',
}

export interface Error {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   * @example "error"
   */
  object: 'error';
  /**
   * The error type
   * @example "parameter_error"
   */
  type:
    | 'parameter_error'
    | 'resource_already_exists'
    | 'resource_missing'
    | 'idempotency_error'
    | 'rate_limit_error'
    | 'authentication_error'
    | 'authorization_error'
    | 'store_error'
    | 'server_error'
    | 'resource_locked_error'
    | 'unprocessable_entity_error'
    | 'invalid_request';
  /**
   * If the error is parameter-specific, the parameter related to the error
   * @example "customer_id"
   */
  param?: string | null;
  /**
   * A URL to more information about the error reported
   * @example "https://errors.rev.cat/parameter-error"
   */
  doc_url?: string;
  /**
   * A message describing the reason of the error
   * @example "id shouldn't be longer than 1,500 characters"
   */
  message: string;
  /**
   * Indicates if the error is retryable or not
   * @example false
   */
  retryable: boolean;
  /**
   * The ms the client should wait before retrying the request. Only present for retryable errors.
   * @example null
   */
  backoff_ms?: number | null;
}

export type ExperimentEnrollment = {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'experiment_enrollment';
  /** @maxLength 1500 */
  id: string;
  /**
   * The variant of the Experiment that the Customer was or is assigned to, where 'a' represents the Control, and 'b' represents the Treatment.
   * @minLength 1
   * @maxLength 1
   * @example "a"
   */
  variant: string;
} | null;

export interface Invoice {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'invoice';
  /**
   * The id of the invoice
   * @minLength 1
   * @maxLength 255
   * @example "rcbin1a2b3c4d5e"
   */
  id: string;
  total_amount: MonetaryAmount;
  /**
   * InvoiceLiteItemList
   * List of line items that are part of the invoice. Each line item represents a product that was purchased.
   */
  line_items: InvoiceLineItem[];
  /**
   * The date when the invoiced was issued in ms since epoch
   * @example 1658399423658
   */
  issued_at: number;
  /**
   * The date when the invoiced was paid in ms since epoch
   * @example 1658399423658
   */
  paid_at: number | null;
  /**
   * URL to download the invoice pdf
   * @example "https://api.revenuecat.com/v2/projects/proj1ab2c3d4/customers/cust1ab2c3d4/invoices/inv1ab2c3d4/file"
   */
  invoice_url: string | null;
}

export interface InvoiceLineItem {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'invoice.line_item';
  /**
   * The product identifier
   * @minLength 1
   * @maxLength 255
   * @example "rc_1w_199"
   */
  product_identifier: string;
  /**
   * The display name of the product
   * @minLength 1
   * @maxLength 1500
   * @example "Premium Monthly 2023"
   */
  product_display_name: string | null;
  /**
   * The duration of the subscription in ISO-8601 standard
   * @pattern ^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$
   * @example "P1M"
   */
  product_duration: string | null;
  /**
   * Total purchased items
   * @example 1
   */
  quantity: number;
  unit_amount: MonetaryAmount;
}

/** AppList */
export interface ListApps {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: App[];
  /**
   * URL to access the next page of the project's apps. If not present / null, there is no next page
   * @example "/v2/projects/projec1a2b3c4d/apps?starting_after=app1a2b3c4d"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/projec1a2b3c4d/apps"
   */
  url: string;
}

/** CustomerActiveEntitlementList */
export interface ListCustomerActiveEntitlements {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: CustomerEntitlement[];
  /**
   * URL to access the next page of the customer's active entitlements. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/active_entitlements?starting_after=entlab21dac"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/active_entitlements"
   */
  url: string;
}

/** CustomerAliasList */
export interface ListCustomerAliases {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: CustomerAlias[];
  /**
   * URL to access the next page of the customer's aliases. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/aliases?starting_after=9fjeja8fjed"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/aliases"
   */
  url: string;
}

/** CustomerInvoicesList */
export interface ListCustomerInvoices {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Invoice[];
  /**
   * URL to access the next page of the customer's invoice. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/invoices?starting_after=rcbin1a2b3c4d5e"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/invoices"
   */
  url: string;
}

/** CustomerList */
export interface ListCustomers {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Customer[];
  /**
   * URL to access the next page of the project's customers. If not present / null, there is no next page
   * @example "/v2/projects/projec1a2b3c4d/customers?starting_after=223xx1100"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/projec1a2b3c4d/customers"
   */
  url: string;
}

/** EntitlementList */
export interface ListEntitlements {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Entitlement[];
  /**
   * URL to access the next page of the project's entitlements. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/entitlements?starting_after=entlab21dac"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/entitlements"
   */
  url: string;
}

/** OfferingList */
export interface ListOfferings {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Offering[];
  /**
   * URL to access the next page of the project's offerings. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/offerings?starting_after=ofrngeab21da"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/offerings"
   */
  url: string;
}

/** PackageList */
export interface ListPackages {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Package[];
  /**
   * URL to access the next page of the project's packages. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages"
   */
  url: string;
}

/** ProductList */
export interface ListProducts {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Product[];
  /**
   * URL to access the next page of the project's products. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/products?starting_after=prodab21dac"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/products"
   */
  url: string;
}

/** ProjectList */
export interface ListProjects {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Project[];
  /**
   * URL to access the next page of the projects. If not present / null, there is no next page
   * @example "/v2/projects?starting_after=projab21dac"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects"
   */
  url: string;
}

/** PurchaseList */
export interface ListPurchases {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Purchase[];
  /**
   * URL to access the next page of the customer's purchases. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/purchases?starting_after=purc1a2b3c4d5e"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/purchases"
   */
  url: string;
}

/** SubscriptionList */
export interface ListSubscriptions {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Subscription[];
  /**
   * URL to access the next page of the customer's subscriptions. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/subscriptions?starting_after=sub1a2b3c4d"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/customers/19b8de26-77c1-49f1-aa18-019a391603e2/subscriptions"
   */
  url: string;
}

export interface MacAppStoreApp {
  /** Legacy Mac App Store type details */
  mac_app_store?: {
    /**
     * The bundle ID of the app
     * @minLength 1
     * @maxLength 256
     */
    bundle_id: string;
  };
}

export interface MacAppStoreAppCreate {
  /** Mac App Store type details. Should only be used when type is mac_app_store. */
  mac_app_store?: {
    /**
     * The bundle ID of the app
     * @minLength 1
     * @maxLength 256
     */
    bundle_id: string;
    /**
     * The shared secret of the app
     * @minLength 32
     * @maxLength 32
     */
    shared_secret?: string;
  };
}

export interface MonetaryAmount {
  /** ISO 4217 currency code */
  currency: Currency;
  /**
   * Total revenue generated (excluding taxes and commission)
   * @example 9.99
   */
  gross: number;
  /**
   * Store commission or payment processor fees deducted from gross revenue (if any)
   * @example 2.99
   */
  commission?: number;
  /**
   * Estimated taxes deducted from gross revenue
   * @example 0.75
   */
  tax: number;
  /**
   * Net revenue after store commission / fees and taxes
   * @example 6.25
   */
  proceeds: number;
}

export interface Offering {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'offering';
  /**
   * The id of the offering
   * @minLength 1
   * @maxLength 255
   * @example "ofrnge1a2b3c4d5"
   */
  id: string;
  /**
   * A custom identifier of the entitlement
   * @minLength 1
   * @maxLength 200
   * @example "default"
   */
  lookup_key: string;
  /**
   * The display name of the offering
   * @minLength 1
   * @maxLength 1500
   * @example "The standard set of packages"
   */
  display_name: string;
  /**
   * Indicates if the offering is the current offering
   * @example true
   */
  is_current: boolean;
  /**
   * The date the offering was created at in ms since epoch
   * @example 1658399423658
   */
  created_at: number;
  /**
   * ID of the project to which the offering belongs
   * @minLength 1
   * @maxLength 20
   * @example "proj1ab2c3d4"
   */
  project_id: string;
  /** Custom metadata of the offering */
  metadata?: OfferingMetadata | null;
  /** PackageList */
  packages?: {
    /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
    object: 'list';
    /** Details about each object. */
    items: Package[];
    /**
     * URL to access the next page of the Offering's packages. If not present / null, there is no next page
     * @example "/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac"
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     * @maxLength 5000
     * @example "/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages"
     */
    url: string;
  };
}

/**
 * Custom metadata of the offering
 * @example {"color":"blue","call_to_action":"Subscribe Now!"}
 */
export type OfferingMetadata = Record<string, any>;

export type OneTimeProduct = {
  /**
   * Indicates whether the product is consumable or not.
   * @example true
   */
  is_consumable: boolean | null;
};

export interface OverviewMetric {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'overview_metric';
  /**
   * Id of the overview metric
   * @minLength 1
   * @maxLength 255
   * @example "active_trials"
   */
  id: string;
  /**
   * Display name of the overview metric
   * @example "Active Trials"
   */
  name: string;
  /** Description of the overview metric */
  description: string;
  /**
   * Unit of the overview metric
   * @example "$"
   */
  unit: string;
  /**
   * Length of time during which metric data is collected in ISO 8601 format. Zero period means metric data was collected now
   * @example "P0D"
   */
  period: 'P0D' | 'P28D';
  /**
   * Value of the overview metric
   * @example 34765
   */
  value: number;
  /**
   * Last time the overview metric was updated in ms since epoch
   * @example 1658399423658
   */
  last_updated_at: number | null;
  /**
   * Last time the overview metric was updated datetime in ISO 8601 format
   * @format date-time
   * @example "2022-10-13 09:45:00.123000+00:00"
   */
  last_updated_at_iso8601: string | null;
}

export interface OverviewMetrics {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'overview_metrics';
  /** Details about each overview metric. */
  metrics: OverviewMetric[];
}

/** @example "purchased" */
export enum Ownership {
  Purchased = 'purchased',
  FamilyShared = 'family_shared',
}

export interface Package {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'package';
  /**
   * The id of the package
   * @minLength 1
   * @maxLength 255
   * @example "pkge1a2b3c4d5"
   */
  id: string;
  /**
   * The lookup_key of the package
   * @minLength 1
   * @maxLength 200
   * @example "monthly"
   */
  lookup_key: string;
  /**
   * The display name of the package
   * @minLength 1
   * @maxLength 1500
   * @example "Monthly discounted with 3-day trial"
   */
  display_name: string;
  /**
   * The position of the package within the offering
   * @example 1
   */
  position: number | null;
  /**
   * The date the package was created at in ms since epoch
   * @example 1658399423658
   */
  created_at: number;
  /** ProductList */
  products?: {
    /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
    object: 'list';
    /** Product association */
    items: PackageProductAssociation[];
    /**
     * URL to access the next page of the project's products. If not present / null, there is no next page
     * @example "/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac"
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     * @maxLength 5000
     * @example "/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products"
     */
    url: string;
  };
}

export interface PackageProductAssociation {
  product: Product;
  eligibility_criteria: EligibilityCriteria;
}

export interface PackageProductIDAssociation {
  /**
   * @minLength 1
   * @maxLength 255
   */
  product_id: string;
  eligibility_criteria: EligibilityCriteria;
}

export interface PlayStoreApp {
  /** Play Store type details */
  play_store?: {
    /**
     * The package name of the app
     * @minLength 1
     * @maxLength 256
     */
    package_name: string;
  };
}

export interface PlayStoreAppCreate {
  /** Play Store type details. Should only be used when type is play_store. */
  play_store?: {
    /**
     * The package name of the app
     * @minLength 1
     * @maxLength 256
     */
    package_name: string;
  };
}

export interface Product {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'product';
  /**
   * The id of the product
   * @minLength 1
   * @maxLength 255
   * @example "prod1a2b3c4d5e"
   */
  id: string;
  /**
   * The store product identifier
   * @minLength 1
   * @maxLength 255
   * @example "rc_1w_199"
   */
  store_identifier: string;
  /** The product type */
  type: ProductType;
  /** The subscription product object */
  subscription?: SubscriptionProduct | null;
  /** The one time product object */
  one_time?: OneTimeProduct | null;
  /**
   * The date when the product was created in ms since epoch
   * @example 1658399423658
   */
  created_at: number;
  /**
   * The id of the app
   * @minLength 1
   * @maxLength 255
   * @example "app1a2b3c4"
   */
  app_id: string;
  /** The app associated with the product */
  app?: App | null;
  /**
   * The display name of the product
   * @minLength 1
   * @maxLength 1500
   * @example "Premium Monthly 2023"
   */
  display_name: string | null;
}

export enum ProductType {
  Subscription = 'subscription',
  OneTime = 'one_time',
}

/** ProductsFromEntitlementList */
export interface ProductsFromEntitlement {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: Product[];
  /**
   * URL to access the next page of the entitlement's products. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/entitlements/entla1b2c3d4e5/products?starting_after=prod1a2b3c4d5"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/entitlements/entla1b2c3d4e5/products"
   */
  url: string;
}

/** ProductsFromPackageList */
export interface ProductsFromPackage {
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: 'list';
  /** Details about each object. */
  items: PackageProductAssociation[];
  /**
   * URL to access the next page of the entitlement's products. If not present / null, there is no next page
   * @example "/v2/projects/proj1ab2c3d4/packages/pkge1a2b3c4d5/products?starting_after=prod1a2b3c4d5"
   */
  next_page: string | null;
  /**
   * The URL where this list can be accessed.
   * @maxLength 5000
   * @example "/v2/projects/proj1ab2c3d4/packages/pkge1a2b3c4d5/products"
   */
  url: string;
}

export interface Project {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'project';
  /**
   * The id of the project
   * @minLength 1
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  id: string;
  /**
   * The name of the project
   * @minLength 1
   * @maxLength 256
   * @example "MagicWeather"
   */
  name: string;
  /**
   * The date when the project was created in ms since epoch
   * @example 1658399423658
   */
  created_at: number;
}

export interface Purchase {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'purchase';
  /**
   * The id of the purchase
   * @minLength 1
   * @maxLength 255
   * @example "purch1a2b3c4d5e"
   */
  id: string;
  /**
   * The id of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customer_id: string;
  /**
   * The ID of the original customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  original_customer_id: string;
  /**
   * The ID of the product that was purchased
   * @minLength 1
   * @maxLength 255
   * @example "prod1a2b3c4d5e"
   */
  product_id: string;
  /**
   * The date when the purchase was made in ms since epoch
   * @example 1658399423658
   */
  purchased_at: number;
  /** The revenue generated by the purchase in USD */
  revenue_in_usd: MonetaryAmount;
  /**
   * The quantity of the product purchased in one transaction
   * @example 1
   */
  quantity: number;
  /**
   * The status of a purchase
   * @example "owned"
   */
  status: 'owned' | 'refunded';
  /**
   * The ID of the offering the customer saw when they did the purchase
   * @minLength 1
   * @maxLength 200
   * @example "ofrnge1a2b3c4d5"
   */
  presented_offering_id: string | null;
  /** EntitlementList */
  entitlements: {
    /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
    object: 'list';
    /** Details about each object. */
    items: Entitlement[];
    /**
     * URL to access the next page of the customer's entitlements. If not present / null, there is no next page
     * @example "/v2/projects/proj1ab2c3d4/purchases/sub1a2b3c4d5e/entitlements?status=active&starting_after=entlab21dac"
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     * @maxLength 5000
     * @example "/v2/projects/proj1ab2c3d4/purchases/sub1a2b3c4d5e/entitlements"
     */
    url: string;
  };
  /** The store environment */
  environment: Environment;
  /**
   * Store the purchase belongs to
   * @example "amazon"
   */
  store: 'amazon' | 'app_store' | 'mac_app_store' | 'play_store' | 'promotional' | 'stripe' | 'rc_billing';
  /**
   * The store purchase identifier
   * @minLength 1
   * @maxLength 255
   * @example 12345678
   */
  store_purchase_identifier: string;
  /** Ownership of the purchase */
  ownership: Ownership;
  /** Billing country in ISO alpha 2 code */
  country?: Country | null;
}

export interface RCBillingApp {
  /** Revenue Cat Billing Store type details */
  rc_billing?: {
    /**
     * Stripe account connected to your RevenueCat account.
     * @minLength 1
     * @maxLength 256
     */
    stripe_account_id?: string | null;
    /**
     * The company name.
     * @minLength 1
     * @maxLength 256
     */
    seller_company_name: string;
    /**
     * The company support email.
     * @minLength 1
     * @maxLength 320
     */
    seller_company_support_email?: string | null;
    /** The default currency to be used for the app. */
    default_currency: RCBillingCurrency;
  };
}

export interface RCBillingAppCreate {
  /** Revenue Cat Billing Store type details */
  rc_billing?: {
    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you only have a single Stripe account connected to your RevenueCat account.
     * @minLength 1
     * @maxLength 256
     */
    stripe_account_id?: string | null;
    /**
     * The company name.
     * @minLength 1
     * @maxLength 256
     */
    seller_company_name: string;
    /**
     * The company support email.
     * @minLength 1
     * @maxLength 320
     */
    seller_company_support_email?: string | null;
    /** ISO 4217 currency code */
    default_currency?: RCBillingCurrency;
  };
}

/**
 * ISO 4217 currency code
 * @example "USD"
 */
export enum RCBillingCurrency {
  AUD = 'AUD',
  CAD = 'CAD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  USD = 'USD',
}

export interface RokuApp {
  /** Roku Channel Store type details */
  roku?: {
    /**
     * Channel ID provided on the Roku Channel page.
     * @minLength 6
     * @maxLength 6
     */
    roku_channel_id?: string | null;
    /**
     * Channel name that is displayed on the Roku Channel page.
     * @minLength 1
     * @maxLength 30
     */
    roku_channel_name?: string | null;
  };
}

export interface RokuAppCreate {
  /** Roku Channel Store details. Should only be used when type is roku. */
  roku?: {
    /**
     * Roku Pay API key provided on the Roku Pay Web Services page.
     * @minLength 33
     * @maxLength 33
     */
    roku_api_key?: string | null;
    /**
     * Channel ID provided on the Roku Channel page.
     * @minLength 6
     * @maxLength 6
     */
    roku_channel_id?: string | null;
    /**
     * Channel name that is displayed on the Roku Channel page.
     * @minLength 1
     * @maxLength 30
     */
    roku_channel_name?: string | null;
  };
}

export interface StripeApp {
  /** Stripe type details */
  stripe?: {
    /**
     * Stripe account connected to your RevenueCat account.
     * @minLength 1
     * @maxLength 256
     */
    stripe_account_id?: string | null;
  };
}

export interface StripeAppCreate {
  /** Stripe type details. Should only be used when type is stripe. */
  stripe?: {
    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you only have a single Stripe account connected to your RevenueCat account.
     * @minLength 1
     * @maxLength 256
     */
    stripe_account_id?: string | null;
  };
}

export interface Subscription {
  /** String representing the object's type. Objects of the same type share the same value. */
  object: 'subscription';
  /**
   * The ID of the subscription (generated by RevenueCat)
   * @minLength 1
   * @maxLength 255
   * @example "sub1ab2c3d4e5"
   */
  id: string;
  /**
   * The ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customer_id: string;
  /**
   * The ID of the original customer. Relevant for subscriptions that were transferred from one customer to another
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  original_customer_id: string;
  /**
   * The RevenueCat ID of the product that the customer is subscribed to. Exists for all store types except for promotional.
   * @minLength 1
   * @maxLength 255
   * @example "prod1a2b3c4d5e"
   */
  product_id: string | null;
  /**
   * The date when the subscription originally started in ms since epoch
   * @example 1658399423658
   */
  starts_at: number;
  /**
   * The date when the subscription billing period started in ms since epoch
   * @example 1658399423658
   */
  current_period_starts_at: number;
  /**
   * The date when the subscription billing period is expected to end in ms since epoch. Can be null if the subscription is paused until an indefinite date.
   * @example 1658399423658
   */
  current_period_ends_at: number | null;
  /**
   * Determines whether the customer should currently be provided access to the entitlements associated with the subscription
   * @example true
   */
  gives_access: boolean;
  /**
   * Determines whether there is a pending payment associated with the subscription
   * @example true
   */
  pending_payment: boolean;
  /**
   * The auto renewal status of a subscription.<br><br>Possible values:<br>• `will_renew`: the subscription is currently set to automatically renew<br>• `will_not_renew`: the subscription is currently set to expire at the end of the period<br>• `will_change_product`: the subscription is currently set to change product at the end of the period (which might start a new subscription)<br>• `will_pause`: the subscription is currently set to pause at the end of the current period<br>• `requires_price_increase_consent`: the subscription will expire at the end of the current period unless the customer consents to the price increase<br>• `has_already_renewed`: the customer has already been charged for the upcoming renewal (so the renewal will take place even if the customer opts out of auto-renewal before the end of the period)
   * @example "will_renew"
   */
  auto_renewal_status:
    | 'will_renew'
    | 'will_not_renew'
    | 'will_change_product'
    | 'will_pause'
    | 'requires_price_increase_consent'
    | 'has_already_renewed';
  /**
   * The status of a subscription. Please note that additional states might be added in the future. To determine whether or not a subscription currently provides access to any associated entitlements, use the _gives_access_ field.<br><br>Possible values:<br>• `trialing`: the subscription is in a free trial period<br>• `active`: the subscription is active, in a paid period<br>• `expired`: the subscription is expired and no longer active<br>• `in_grace_period`: the subscription is past its regular expiry date and experienced a billing issue, but is currently still in an access-granting grace period<br>• `in_billing_retry`: the subscription has experienced a billing issue. Billing is being retried, access is suspended.-paused: the subscription is currently paused and should not provide access.<br>• `unknown`: the subscription is in an unknown state. Refer to the _gives_access_ field to determine whether or not to grant access.<br>• `incomplete`: the subscription is in an incomplete state, maybe due to incorrect billing details or because it's scheduled to start in the future.
   * @example "trialing"
   */
  status:
    | 'trialing'
    | 'active'
    | 'expired'
    | 'in_grace_period'
    | 'in_billing_retry'
    | 'paused'
    | 'unknown'
    | 'incomplete';
  /** Total revenue generated by a subscription in USD */
  total_revenue_in_usd: MonetaryAmount;
  /**
   * The ID of the offering the customer saw when purchasing the subscription
   * @minLength 1
   * @maxLength 200
   * @example "ofrnge1a2b3c4d5"
   */
  presented_offering_id: string | null;
  /** EntitlementList */
  entitlements: {
    /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
    object: 'list';
    /** Details about each object. */
    items: Entitlement[];
    /**
     * URL to access the next page of the customer's entitlements. If not present / null, there is no next page
     * @example "/v2/projects/proj1ab2c3d4/subscriptions/sub1a2b3c4d5e/entitlements?status=active&starting_after=entlab21dac"
     */
    next_page: string | null;
    /**
     * The URL where this list can be accessed.
     * @maxLength 5000
     * @example "/v2/projects/proj1ab2c3d4/subscriptions/sub1a2b3c4d5e/entitlements"
     */
    url: string;
  };
  /** The store environment */
  environment: Environment;
  /**
   * Store the subscription belongs to
   * @example "amazon"
   */
  store: 'amazon' | 'app_store' | 'mac_app_store' | 'play_store' | 'promotional' | 'stripe' | 'rc_billing';
  /**
   * The subscription identifier as per the store (e.g, for Apple App Store, the `transaction_id` of the latest transaction of the subscription, or for Google Play Store, the Order ID of the last renewal of the subscription)
   * @minLength 1
   * @maxLength 255
   * @example 12345678
   */
  store_subscription_identifier: string;
  /** Ownership of the subscription */
  ownership: Ownership;
  /** Indicates pending product changes. Present if the `auto_renewal_status` is `will_change_product`. */
  pending_changes?: {
    /** The product that will be active as of the next renewal */
    product?: Product;
  } | null;
  /** Billing country in ISO alpha 2 code */
  country?: Country | null;
  /**
   * The URL to manage the subscription
   * @example "https://apps.apple.com/account/subscriptions"
   */
  management_url: string | null;
}

export type SubscriptionProduct = {
  /**
   * The duration of the subscription in ISO-8601 standard
   * @pattern ^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$
   * @example "P1M"
   */
  duration: string | null;
  /**
   * The duration of the subscription's grace period in ISO-8601 standard
   * @pattern ^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$
   * @example "P3D"
   */
  grace_period_duration: string | null;
  /**
   * The duration of the subcription's trial period in ISO-8601 standard
   * @pattern ^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$
   * @example "P1W"
   */
  trial_duration: string | null;
};

export interface ListProjectsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
}

export type ListProjectsData = ListProjects;

export interface ListAppsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
}

export type ListAppsData = ListApps;

export type CreateAppData = App;

export type GetAppData = App;

export interface UpdateAppPayload {
  /**
   * The name of the app
   * @minLength 1
   * @maxLength 255
   * @example "My App"
   */
  name?: string;
  /** Amazon type details. Should only be used when type is amazon. */
  amazon?: {
    /**
     * The package name of the app
     * @minLength 1
     * @maxLength 256
     */
    package_name?: string;
    /** Your Amazon Developer Identity Shared Key */
    shared_secret?: string | null;
  };
  /** App Store type details. Should only be used when type is app_store. */
  app_store?: {
    /**
     * The bundle ID of the app
     * @minLength 1
     * @maxLength 256
     */
    bundle_id?: string;
    /**
     * The shared secret of the app
     * @minLength 32
     * @maxLength 32
     */
    shared_secret?: string | null;
  };
  /** Legacy Mac App Store type details. Should only be used when type is mac_app_store. */
  mac_app_store?: {
    /**
     * The bundle ID of the app
     * @minLength 1
     * @maxLength 256
     */
    bundle_id?: string;
    /**
     * The shared secret of the app
     * @minLength 32
     * @maxLength 32
     */
    shared_secret?: string | null;
  };
  /** Play Store type details. Should only be used when type is play_store. */
  play_store?: {
    /**
     * The package name of the app
     * @minLength 1
     * @maxLength 256
     */
    package_name: string;
  };
  /** Stripe type details. Should only be used when type is stripe. */
  stripe?: {
    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you only have a single Stripe account connected to your RevenueCat account.
     * @minLength 1
     * @maxLength 256
     */
    stripe_account_id?: string;
  };
  /** RevenueCat Billing type details. Should only be used when type is rc_billing. */
  rc_billing?: {
    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you only have a single Stripe account connected to your RevenueCat account.
     * @minLength 1
     * @maxLength 256
     */
    stripe_account_id?: string | null;
    /**
     * The company name.
     * @minLength 1
     * @maxLength 256
     */
    seller_company_name?: string | null;
    /**
     * The company support email.
     * @minLength 1
     * @maxLength 320
     */
    seller_company_support_email?: string | null;
    /** ISO 4217 currency code */
    default_currency?: RCBillingCurrency;
  };
  /** Roku Channel Store type details. Should only be used when type is roku. */
  roku?: {
    /**
     * Roku Pay API key provided on the Roku Pay Web Services page.
     * @minLength 33
     * @maxLength 33
     */
    roku_api_key?: string | null;
    /**
     * Channel ID provided on the Roku Channel page.
     * @minLength 6
     * @maxLength 6
     */
    roku_channel_id?: string | null;
    /**
     * Channel name that is displayed on the Roku Channel page.
     * @minLength 1
     * @maxLength 30
     */
    roku_channel_name?: string | null;
  };
}

export type UpdateAppData = App;

export type DeleteAppData = DeletedObject;

export interface ListCustomersParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
}

export type ListCustomersData = ListCustomers;

export interface CreateCustomerPayload {
  /**
   * The ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @pattern ^[0-9a-zA-Z_-]*$
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  id: string;
  /** @maxLength 50 */
  attributes?: {
    /**
     * The name of the attribute
     * @minLength 1
     * @maxLength 40
     * @example "$email"
     */
    name?: CustomerAttributeReservedName | CustomerAttributeCustomName;
    /**
     * The value of the attribute
     * @maxLength 500
     * @example "cat@revenuecat.com"
     */
    value?: string;
  }[];
}

export type CreateCustomerData = Customer;

export type GetCustomerData = Customer;

export type DeleteCustomerData = DeletedObject;

export interface GetProductParams {
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `app` (requires `project_configuration:apps:read` permissions).
   */
  expand?: 'app'[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the product
   * @minLength 1
   * @maxLength 255
   * @example "prod1a2b3c4d5"
   */
  productId: string;
}

export type GetProductData = Product;

export type DeleteProductData = DeletedObject;

export interface ListProductsParams {
  /**
   * This is an optional query parameter to get a list of products of a given entitlement associated with a particular app
   * @example "app1a2b3c4"
   */
  app_id?: string;
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `items.app` (requires `project_configuration:apps:read` permissions).
   */
  expand?: 'items.app'[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
}

export type ListProductsData = ListProducts;

export interface CreateProductPayload {
  /**
   * The store identifier of the product.
   * - For Apple App Store products this is the product ID of the subscription or in-app product.
   * - For Google's Play Store, it should follow the format 'productId:basePlanId' for subscription products and SKU for one-time purchase products.
   * - For Stripe, the product identifier that always starts with "prod_"
   * - For Amazon, if it's a subscription, the term SKU of the subscription. If it's a one-time purchase, the SKU of the product.
   * - For Roku, this is the product identifier of the subscription or one-time purchase product.
   * @minLength 1
   * @maxLength 200
   * @example "com.revenuecat.magicweather.monthly"
   */
  store_identifier: string;
  /**
   * The ID of the app
   * @minLength 1
   * @maxLength 255
   * @example "app1a2b3c4"
   */
  app_id: string;
  /** The product type */
  type: ProductType;
  /**
   * The display name of the product
   * @minLength 1
   * @maxLength 1500
   * @example "Premium Monthly 2023"
   */
  display_name?: string | null;
}

export type CreateProductData = Product;

export interface GetEntitlementParams {
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `product` (requires `project_configuration:products:read` permissions).
   */
  expand?: 'product'[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the entitlement
   * @minLength 1
   * @maxLength 255
   * @example "entla1b2c3d4e5"
   */
  entitlementId: string;
}

export type GetEntitlementData = Entitlement;

export interface UpdateEntitlementPayload {
  /**
   * The display name of the entitlement
   * @minLength 1
   * @maxLength 1500
   * @example "Premium"
   */
  display_name: string;
}

export type UpdateEntitlementData = Entitlement;

export type DeleteEntitlementData = DeletedObject;

export interface ListEntitlementsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `items.product` (requires `project_configuration:products:read` permissions).
   */
  expand?: 'items.product'[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
}

export type ListEntitlementsData = ListEntitlements;

export interface CreateEntitlementPayload {
  /**
   * The identifier of the entitlement
   * @minLength 1
   * @maxLength 200
   * @example "premium"
   */
  lookup_key: string;
  /**
   * The display name of the entitlement
   * @minLength 1
   * @maxLength 1500
   * @example "Premium access to all features"
   */
  display_name: string;
}

export type CreateEntitlementData = Entitlement;

export interface GetProductsFromEntitlementParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the entitlement
   * @minLength 1
   * @maxLength 255
   * @example "entla1b2c3d4e5"
   */
  entitlementId: string;
}

export type GetProductsFromEntitlementData = ProductsFromEntitlement;

export interface AttachProductsToEntitlementPayload {
  /**
   * IDs of the products to be attached to the entitlement.
   * @minLength 1
   * @maxLength 50
   */
  product_ids: string[];
}

export type AttachProductsToEntitlementData = Entitlement;

export interface DetachProductsFromEntitlementPayload {
  /**
   * IDs of the products to be detached from the entitlement.
   * @minLength 1
   * @maxLength 50
   */
  product_ids: string[];
}

export type DetachProductsFromEntitlementData = Entitlement;

export interface GetOfferingParams {
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `package` (requires `project_configuration:packages:read` permissions), `package.product` (requires `project_configuration:products:read` permissions).
   */
  expand?: ('package' | 'package.product')[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the offering
   * @minLength 1
   * @maxLength 255
   * @example "ofrnge1a2b3c4d5"
   */
  offeringId: string;
}

export type GetOfferingData = Offering;

export interface UpdateOfferingPayload {
  /**
   * The display name of the offering
   * @minLength 1
   * @maxLength 1500
   * @example "premium access to features"
   */
  display_name?: string;
  /**
   * Indicates if the offering is the current offering
   * @example true
   */
  is_current?: boolean;
  /** Custom metadata of the offering */
  metadata?: OfferingMetadata | null;
}

export type UpdateOfferingData = Offering;

export type DeleteOfferingData = DeletedObject;

export interface ListOfferingsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `items.package` (requires `project_configuration:packages:read` permissions), `items.package.product` (requires `project_configuration:products:read` permissions).
   */
  expand?: ('items.package' | 'items.package.product')[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
}

export type ListOfferingsData = ListOfferings;

export interface CreateOfferingPayload {
  /**
   * The custom identifier of the offering
   * @minLength 1
   * @maxLength 200
   * @example "default"
   */
  lookup_key: string;
  /**
   * The display_name of the offering
   * @minLength 1
   * @maxLength 1500
   * @example "The standard set of packages"
   */
  display_name: string;
  /** Custom metadata of the offering */
  metadata?: OfferingMetadata | null;
}

export type CreateOfferingData = Offering;

export interface GetPackageParams {
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `product` (requires `project_configuration:products:read` permissions).
   */
  expand?: 'product'[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the package
   * @minLength 1
   * @maxLength 255
   * @example "pkge1a2b3c4d5"
   */
  packageId: string;
}

export type GetPackageData = Package;

export interface UpdatePackagePayload {
  /**
   * The display name of the package
   * @minLength 1
   * @maxLength 1500
   * @example "monthly with one-week trial"
   */
  display_name?: string;
  /**
   * The position of the package within the offering
   * @min 1
   * @example 2
   */
  position?: number;
}

export type UpdatePackageData = Package;

export type DeletePackageFromOfferingData = DeletedObject;

export interface ListPackagesParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * Specifies which fields in the response should be expanded.
   *  Accepted values are: `items.product` (requires `project_configuration:products:read` permissions).
   */
  expand?: 'items.product'[];
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the offering
   * @minLength 1
   * @maxLength 255
   * @example "ofrnge1a2b3c4d5"
   */
  offeringId: string;
}

export type ListPackagesData = ListPackages;

export interface CreatePackagesPayload {
  /**
   * The lookup_key of the package
   * @minLength 1
   * @maxLength 200
   * @example "monthly"
   */
  lookup_key: string;
  /**
   * The display name of the package
   * @minLength 1
   * @maxLength 1500
   * @example "monthly with one-week trial"
   */
  display_name: string;
  /**
   * The position of the package in the offering
   * @example 1
   */
  position?: number;
}

export type CreatePackagesData = Package;

export interface GetProductsFromPackageParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the package
   * @minLength 1
   * @maxLength 255
   * @example "pkge1a2b3c4d5"
   */
  packageId: string;
}

export type GetProductsFromPackageData = ProductsFromPackage;

export interface AttachProductsToPackagePayload {
  /**
   * Product association list
   * @minLength 1
   * @maxLength 50
   */
  products: PackageProductIDAssociation[];
}

export type AttachProductsToPackageData = Package;

export interface DetachProductsFromPackagePayload {
  /**
   * IDs of the products to detach from the package
   * @minLength 1
   * @maxLength 50
   */
  product_ids: string[];
}

export type DetachProductsFromPackageData = Package;

export type GetSubscriptionData = Subscription;

export interface ListSubscriptionEntitlementsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the subscription
   * @minLength 1
   * @maxLength 255
   * @example "sub1a2b3c4d5e"
   */
  subscriptionId: string;
}

export type ListSubscriptionEntitlementsData = ListEntitlements;

export type CancelSubscriptionData = Subscription;

export type RefundSubscriptionData = Subscription;

export interface ListSubscriptionsParams {
  /** @example "production" */
  environment?: 'sandbox' | 'production';
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customerId: string;
}

export type ListSubscriptionsData = ListSubscriptions;

export type GetPurchaseData = Purchase;

export interface ListPurchaseEntitlementsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the purchase
   * @minLength 1
   * @maxLength 255
   * @example "purc1a2b3c4d5e"
   */
  purchaseId: string;
}

export type ListPurchaseEntitlementsData = ListEntitlements;

export type RefundPurchaseData = Purchase;

export interface ListPurchasesParams {
  /** @example "production" */
  environment?: 'sandbox' | 'production';
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customerId: string;
}

export type ListPurchasesData = ListPurchases;

export interface ListCustomerActiveEntitlementsParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customerId: string;
}

export type ListCustomerActiveEntitlementsData = ListCustomerActiveEntitlements;

export interface ListCustomerAliasesParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customerId: string;
}

export type ListCustomerAliasesData = ListCustomerAliases;

export interface ListCustomerInvoicesParams {
  /** @example "ent12354" */
  starting_after?: string;
  /**
   * @default 20
   * @example 10
   */
  limit?: number;
  /**
   * ID of the project
   * @maxLength 255
   * @example "proj1ab2c3d4"
   */
  projectId: string;
  /**
   * ID of the customer
   * @minLength 1
   * @maxLength 1500
   * @example "19b8de26-77c1-49f1-aa18-019a391603e2"
   */
  customerId: string;
}

export type ListCustomerInvoicesData = ListCustomerInvoices;

export type GetOverviewMetricsData = OverviewMetrics;
