export interface TrackerParams {
  logEvent (params: LogParams): void
  init (params: InitParams): void
  setUserId (userId: string): void
  setUserProperties (userProperties: unknown): void

  getSessionId (): number | null
  isNewSession (): boolean | null
  clearUserProperties (): void
  setDomain (domain: string): void
  setTrackOff (enable: boolean): void
  setGroup (params: GroupParams): void
  setDeviceId (deviceId: string): void
  logGroup (params: LogGroupParams): void
}

export type InitParams = {
  apiKey: string
  userId?: string
  options?: InitOptions
  callback?: () => unknown
}

export type LogParams = {
  eventName: string
  eventProperties?: unknown
  timestamp?: number
  callback?: () => unknown
}

export type LogGroupParams = {
  eventName: string
  eventProperties?: unknown
  groups?: unknown
  callback?: () => unknown
}

export type GroupParams = {
  groupType: string
  groupName: string | string[]
}

export type InitOptions = {
  saveEvents?: boolean
  includeUtm?: boolean
  includeGclid?: boolean
  includeReferrer?: boolean
  eventUploadPeriodMillis?: number
  saveParamsReferrerOncePerSession?: boolean

  // see in: https://amplitude.github.io/Amplitude-JavaScript/Options/
  domain?: string
  optOut?: string
  onError?: string
  storage?: string
  language?: string
  platform?: string
  logLevel?: string
  deviceId?: string
  unsentKey?: string
  forceHttps?: string
  apiEndpoint?: string
  batchEvents?: string
  secureCookie?: string
  includeFbclid?: string
  savedMaxCount?: string
  sessionTimeout?: string
  sameSiteCookie?: string
  disableCookies?: string
  trackingOptions?: string
  uploadBatchSize?: string
  cookieExpiration?: string
  unsentIdentifyKey?: string
  cookieForceUpgrade?: string
  deferInitialization?: string
  deviceIdFromUrlParam?: string
  eventUploadThreshold?: string
  logAttributionCapturedEvent?: string
  unsetParamsReferrerOnNewSession?: string
}
