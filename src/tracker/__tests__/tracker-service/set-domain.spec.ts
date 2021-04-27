import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called setDomain function with correct params and correct response', () => {
    const { track } = makeSut()
    const setDomainSpy = jest.spyOn(track, 'setDomain').mockImplementation(() => ({ success: true }))

    const { domain } = mock
    const res: StatusResponse = track.setDomain(domain)

    expect(res).toEqual({ success: true })
    expect(setDomainSpy).toHaveBeenCalledWith(domain)
  })

  test('Should to have be called setDomain function with error response', () => {
    const { track } = makeSut()
    const setDomainSpy = jest.spyOn(track, 'setDomain').mockImplementation(() => ({ error: true }))

    const { domain } = mock
    const res: StatusResponse = track.setDomain(domain)

    expect(res).toEqual({ error: true })
    expect(setDomainSpy).toHaveBeenCalledWith(domain)
  })
})
