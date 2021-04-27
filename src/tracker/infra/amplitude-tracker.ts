import * as Types from '@/tracker/data/tracker-params'

let amplitude: any
if (typeof window !== 'undefined') amplitude = require('amplitude-js')

export class AmplitudeEventTracker implements Types.TrackerParams {
  init (params: Types.InitParams): Types.StatusResponse {
    try {
      amplitude.getInstance().init(params)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE INIT ERROR: ', err)
      return { error: true }
    }
  }

  logEvent (params: Types.LogParams): Types.StatusResponse {
    try {
      amplitude.getInstance().logEvent(params)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE LOG EVENT ERROR: ', err)
      return { error: true }
    }
  }

  setUserId (userId: string): Types.StatusResponse {
    try {
      amplitude.getInstance().setUserId(userId)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE SET USER ID ERROR: ', err)
      return { error: true }
    }
  }

  setUserProperties (userProperties: {}): Types.StatusResponse {
    try {
      amplitude.getInstance().setUserProperties(userProperties)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE SET USER PROPERTIES ERROR: ', err)
      return { error: true }
    }
  }

  getSessionId (): Types.SessionIdResponse {
    try {
      const res = amplitude.getInstance().getSessionId()
      return { success: true, sessionId: res }
    } catch (err) {
      console.error('AMPLITUDE GET SESSION ID ERROR: ', err)
      return { error: true, sessionId: null }
    }
  }

  isNewSession (): Types.NewSessionResponse {
    try {
      const res = amplitude.getInstance().isNewSession()
      return { success: true, isNewSession: res }
    } catch (err) {
      console.error('AMPLITUDE IS NEW SESSION ERROR: ', err)
      return { error: true, isNewSession: null }
    }
  }

  clearUserProperties (): Types.StatusResponse {
    try {
      amplitude.getInstance().clearUserProperties()
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE CLEAR USER PROPERTIES ERROR: ', err)
      return { error: true }
    }
  }

  setDomain (domain: string): Types.StatusResponse {
    try {
      amplitude.getInstance().setDomain(domain)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE SET DOMAIN ERROR: ', err)
      return { error: true }
    }
  }

  setTrackOff (enable: boolean): Types.StatusResponse {
    try {
      amplitude.getInstance().setOptOut(enable)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE SET TRACK OFF ERROR: ', err)
      return { error: true }
    }
  }

  setGroup (params: Types.GroupParams): Types.StatusResponse {
    try {
      amplitude.getInstance().setGroup(params)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE SET GROUP ERROR: ', err)
      return { error: true }
    }
  }

  setDeviceId (deviceId: string): Types.StatusResponse {
    try {
      amplitude.getInstance().setDeviceId(deviceId)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE SET DEVICE ID ERROR: ', err)
      return { error: true }
    }
  }

  logGroup (params: Types.LogGroupParams): Types.StatusResponse {
    try {
      amplitude.getInstance().logEventWithGroups(params)
      return { success: true }
    } catch (err) {
      console.error('AMPLITUDE LOG GROUP ERROR: ', err)
      return { error: true }
    }
  }
}
