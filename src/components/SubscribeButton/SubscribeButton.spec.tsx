import {render, screen, fireEvent} from '@testing-library/react'
import { SubscribeButton } from ".";
import {signIn} from 'next-auth/client'
import {mocked} from 'ts-jest/utils'

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    },
    signIn: jest.fn(),
  }
})

describe('SubscribeButton', () => {
  it('renders correctly when user is not authenticated', () => {

    render(
      <SubscribeButton />
    )
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    
    const signInMocked = mocked(signIn)

    render(
      <SubscribeButton />
    )

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
    
  })
})

