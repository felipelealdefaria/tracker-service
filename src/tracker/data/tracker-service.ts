import * as Types from '@/tracker/domain/tracker'
import { TrackerParams } from '@/tracker/data/tracker-params'
export class TrackerService implements Types.Tracker {
  constructor (private readonly tracker: TrackerParams) {}

  init ({ apiKey, userId, options, callback }: Types.InitParams): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.init({ apiKey, userId, options, callback })
    if (res?.success) return { success: true }
    return { error: true }
  }

  log ({ eventName, eventProperties, timestamp, callback }: Types.LogParams): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.logEvent({ eventName, eventProperties, timestamp, callback })
    if (res?.success) return { success: true }
    return { error: true }
  }

  setUserId (userId: string): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.setUserId(userId)
    if (res?.success) return { success: true }
    return { error: true }
  }

  setUserProperties (userProperties: {}): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.setUserProperties(userProperties)
    if (res?.success) return { success: true }
    return { error: true }
  }

  getSessionId (): Types.SessionIdResponse {
    const res: Types.SessionIdResponse = this.tracker.getSessionId()
    if (res?.success) return { success: true, sessionId: res?.sessionId }
    return { error: true, sessionId: null }
  }

  isNewSession (): Types.NewSessionResponse {
    const res: Types.NewSessionResponse = this.tracker.isNewSession()
    if (res?.success) return { success: true, isNewSession: res?.isNewSession }
    return { error: true, isNewSession: null }
  }

  clearUserProperties (): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.clearUserProperties()
    if (res?.success) return { success: true }
    return { error: true }
  }

  setDomain (domain: string): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.setDomain(domain)
    if (res?.success) return { success: true }
    return { error: true }
  }

  setTrackOff (enable: boolean): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.setTrackOff(enable)
    if (res?.success) return { success: true }
    return { error: true }
  }

  setGroup (params: Types.GroupParams): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.setGroup(params)
    if (res?.success) return { success: true }
    return { error: true }
  }

  setDeviceId (deviceId: string): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.setDeviceId(deviceId)
    if (res?.success) return { success: true }
    return { error: true }
  }

  logGroup (params: Types.LogGroupParams): Types.StatusResponse {
    const res: Types.StatusResponse = this.tracker.logGroup(params)
    if (res?.success) return { success: true }
    return { error: true }
  }
}
