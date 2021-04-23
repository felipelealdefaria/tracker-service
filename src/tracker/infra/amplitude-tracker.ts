import * as Types from '@/tracker/data/tracker-params'

let amplitude: any
if (typeof window !== 'undefined') amplitude = require('amplitude-js')

export class AmplitudeEventTracker implements Types.TrackerParams {
  init (params: Types.InitParams): void {
    const { apiKey, userId, options, callback } = params

    try {
      amplitude.getInstance().init(apiKey, userId, options, callback)
    } catch (err) {
      console.error('AMPLITUDE INIT ERROR: ', err)
    }
  }

  logEvent (params: Types.LogParams): void {
    const { eventName, eventProperties, callback } = params

    try {
      amplitude.getInstance().logEvent(eventName, eventProperties, callback)
    } catch (err) {
      console.error('AMPLITUDE LOG EVENT ERROR: ', err)
    }
  }

  setUserId (userId: string): void {
    try {
      amplitude.getInstance().setUserId(userId)
    } catch (err) {
      console.error('AMPLITUDE SET USER ID ERROR: ', err)
    }
  }

  setUserProperties (userProperties: {}): void {
    try {
      amplitude.getInstance().setUserProperties(userProperties)
    } catch (err) {
      console.error('AMPLITUDE SET USER PROPERTIES ERROR: ', err)
    }
  }

  getSessionId (): number | null {
    try {
      return amplitude.getInstance().getSessionId()
    } catch (err) {
      console.error('AMPLITUDE GET SESSION ID ERROR: ', err)
      return null
    }
  }

  isNewSession (): boolean | null {
    try {
      return amplitude.getInstance().isNewSession()
    } catch (err) {
      console.error('AMPLITUDE IS NEW SESSION ERROR: ', err)
      return null
    }
  }

  clearUserProperties (): void {
    try {
      amplitude.getInstance().clearUserProperties()
    } catch (err) {
      console.error('AMPLITUDE CLEAR USER PROPERTIES ERROR: ', err)
    }
  }

  setDomain (domain: string): void {
    try {
      amplitude.getInstance().setDomain(domain)
    } catch (err) {
      console.error('AMPLITUDE SET DOMAIN ERROR: ', err)
    }
  }

  setTrackOff (enable: boolean): void {
    try {
      amplitude.getInstance().setTrackOff(enable)
    } catch (err) {
      console.error('AMPLITUDE SET TRACK OFF ERROR: ', err)
    }
  }

  setGroup (params: Types.GroupParams): void {
    try {
      amplitude.getInstance().setGroup(params)
    } catch (err) {
      console.error('AMPLITUDE SET GROUP ERROR: ', err)
    }
  }

  setDeviceId (deviceId: string): void {
    try {
      amplitude.getInstance().setDeviceId(deviceId)
    } catch (err) {
      console.error('AMPLITUDE SET DEVICE ID ERROR: ', err)
    }
  }

  logGroup (params: Types.LogGroupParams): void {
    try {
      amplitude.getInstance().logGroup(params)
    } catch (err) {
      console.error('AMPLITUDE LOG GROUP ERROR: ', err)
    }
  }
}
