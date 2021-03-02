export interface Tracker {
  init (params: InitParams): Promise<void>
  track (params: TrackParams): Promise<void>
  trackGroup (params: TrackGroupParams): Promise<void>

  getSessionId (): number
  isNewSession (): boolean
  clearUserProperties (): Promise<void>
  setUserId (userId: string): Promise<void>
  setDomain (domain: string): Promise<void>
  setTrackOff (enable: boolean): Promise<void>
  setGroup (params: GroupParams): Promise<void>
  setDeviceId (deviceId: string): Promise<void>
  setUserProperties (userProperties: {}): Promise<void>
}

type InitParams = {
  apiKey: string
  userId?: string
  options?: {}
  callback?: Function
}

type TrackParams = {
  eventType: string
  eventProperties?: {}
  timestamp?: number
  callback?: Function
}

type TrackGroupParams = {
  eventType: string
  eventProperties?: {}
  groups?: {}
  callback?: Function
}

type GroupParams = {
  groupType: string
  groupName: string | string[]
}
