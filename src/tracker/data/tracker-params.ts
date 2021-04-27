export interface TrackerParams {
  logEvent (params: LogParams): StatusResponse
  init (params: InitParams): StatusResponse
  setUserId (userId: string): StatusResponse
  setUserProperties (userProperties: unknown): StatusResponse

  getSessionId (): SessionIdResponse
  isNewSession (): NewSessionResponse
  clearUserProperties (): StatusResponse
  setDomain (domain: string): StatusResponse
  setTrackOff (enable: boolean): StatusResponse
  setGroup (params: GroupParams): StatusResponse
  setDeviceId (deviceId: string): StatusResponse
  logGroup (params: LogGroupParams): StatusResponse
}

export type StatusResponse = {
  error?: boolean
  success?: boolean
}

export type SessionIdResponse = {
  sessionId: number | null
} & StatusResponse

export type NewSessionResponse = {
  isNewSession: boolean | null
} & StatusResponse

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
