import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called setGroup function with correct params and correct response', () => {
    const { track } = makeSut()
    const setGroupSpy = jest.spyOn(track, 'setGroup').mockImplementation(() => ({ success: true }))

    const { groupName, groupType } = mock
    const res: StatusResponse = track.setGroup({ groupName, groupType })

    expect(res).toEqual({ success: true })
    expect(setGroupSpy).toHaveBeenCalledWith({ groupName, groupType })
  })

  test('Should to have be called setGroup function with error response', () => {
    const { track } = makeSut()
    const setGroupSpy = jest.spyOn(track, 'setGroup').mockImplementation(() => ({ error: true }))

    const { groupName, groupType } = mock
    const res: StatusResponse = track.setGroup({ groupName, groupType })

    expect(res).toEqual({ error: true })
    expect(setGroupSpy).toHaveBeenCalledWith({ groupName, groupType })
  })
})
