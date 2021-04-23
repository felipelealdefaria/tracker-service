import * as Types from '@/tracker/domain/tracker'
import { TrackerParams } from '@/tracker/data/tracker-params'
export class TrackerService implements Types.Tracker {
  constructor (private readonly tracker: TrackerParams) {}

  init ({ apiKey, userId, options, callback }: Types.InitParams): Types.StatusResponse {
    try {
      this.tracker.init({ apiKey, userId, options, callback })
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  log ({ eventName, eventProperties, timestamp, callback }: Types.LogParams): Types.StatusResponse {
    try {
      this.tracker.logEvent({ eventName, eventProperties, timestamp, callback })
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  setUserId (userId: string): Types.StatusResponse {
    try {
      this.tracker.setUserId(userId)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  setUserProperties (userProperties: {}): Types.StatusResponse {
    try {
      this.tracker.setUserProperties(userProperties)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  getSessionId (): Types.SessionIdResponse {
    try {
      const sessionId = this.tracker.getSessionId()
      return { success: true, sessionId: sessionId }
    } catch (err) {
      return { error: true, sessionId: null }
    }
  }

  isNewSession (): Types.NewSessionResponse {
    try {
      const isNewSession = this.tracker.isNewSession()
      return { success: true, isNewSession: isNewSession }
    } catch (err) {
      return { error: true, isNewSession: null }
    }
  }

  clearUserProperties (): Types.StatusResponse {
    try {
      this.tracker.clearUserProperties()
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  setDomain (domain: string): Types.StatusResponse {
    try {
      this.tracker.setDomain(domain)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  setTrackOff (enable: boolean): Types.StatusResponse {
    try {
      this.tracker.setTrackOff(enable)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  setGroup (params: Types.GroupParams): Types.StatusResponse {
    try {
      this.tracker.setGroup(params)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  setDeviceId (deviceId: string): Types.StatusResponse {
    try {
      this.tracker.setDeviceId(deviceId)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }

  logGroup (params: Types.LogGroupParams): Types.StatusResponse {
    try {
      this.tracker.logGroup(params)
      return { success: true }
    } catch (err) {
      return { error: true }
    }
  }
}
