import React from 'react'
import { useSelectedChainIdUser } from 'lib/hooks/v4/User/useSelectedChainIdUser'
import { PagePadding } from 'lib/components/Layout/PagePadding'
import { ConnectWalletCard } from 'lib/components/ConnectWalletCard'
import { AccountCard } from 'lib/views/Account/AccountCard'
import { useOnboard } from '@pooltogether/bnc-onboard-hooks'
import { XDollarsGetsYou } from 'lib/components/XDollarsGetsYou'
import { OddsDisclaimer } from './OddsDisclaimer'
import { V4Deposits } from './V4Deposits'
import { V3Deposits } from './V3Deposits'
import { StakingDeposits } from './StakingDeposits'

export const AccountUI = (props) => {
  const { isWalletConnected } = useOnboard()

  const user = useSelectedChainIdUser()

  if (!isWalletConnected) {
    return (
      <PagePadding className='space-y-8'>
        <Piggy className='w-20 sm:w-32 mb-2 sm:mb-4 mx-auto' />
        <span className='mx-auto mb-6 text-xs sm:text-lg block text-center'>
          <XDollarsGetsYou x='100' />!<span className='opacity-40'>*</span>
        </span>
        <ConnectWalletCard />
        <OddsDisclaimer className='block mt-6' />
      </PagePadding>
    )
  }

  return (
    <PagePadding className='space-y-8'>
      <AccountCard user={user} />
      <V4Deposits />
      <StakingDeposits />
      <V3Deposits />
      <OddsDisclaimer className='block mt-6' />
    </PagePadding>
  )
}

const Piggy = (props) => {
  return (
    <svg
      {...props}
      width='100%'
      height='100%'
      viewBox='0 0 77 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.8 51.596h3.024c.968 0 1.875.534 2.367 1.393 1.732 3.015 4.503 5.706 8.014 7.784.995.588 1.59 1.553 1.59 2.58v6.323c0 .766.678 1.386 1.517 1.386h8.397c.839 0 1.518-.62 1.518-1.386v-4.624a37.9 37.9 0 009.936 0v4.624c0 .766.68 1.386 1.518 1.386h8.397c.839 0 1.518-.62 1.518-1.386v-8.03c5.882-2.994 9.804-7.447 11.158-12.415 1.515 1.508 3.8 2.966 6.985 2.966 3.714 0 5.959-2.867 6.538-5.709.633-3.113-.613-5.882-3.032-6.733-2.096-.737-4.507-.05-5.864 1.672-1.184 1.506-1.184 3.323.001 4.63.532.587 1.491.67 2.137.18.645-.488.734-1.362.199-1.952-.41-.451-.047-1.017.127-1.24.464-.59 1.355-1.04 2.31-.703.998.352 1.489 1.916 1.138 3.639-.324 1.588-1.448 3.443-3.554 3.443-3.966 0-6.015-3.51-6.45-4.352-.266-10.843-12.754-19.61-28.093-19.61-4.45 0-8.854.76-12.824 2.207-2.569-3.502-5.92-6.346-6.073-6.476a1.626 1.626 0 00-1.638-.252c-.553.22-.91.719-.91 1.27v10.314c-1.936 1.62-3.483 3.438-4.605 5.41a2.567 2.567 0 01-2.22 1.312H3.8c-1.787 0-3.24 1.329-3.24 2.961v6.427c0 1.633 1.453 2.961 3.24 2.961zm-.205-9.388c0-.103.091-.188.205-.188h3.126c2.047 0 3.93-1.075 4.915-2.806 1.043-1.835 2.53-3.524 4.42-5.018.334-.264.525-.646.525-1.049v-7.503c1.197 1.23 2.6 2.814 3.696 4.475.396.598 1.214.835 1.92.548 3.888-1.59 8.312-2.432 12.794-2.432 13.83 0 25.083 7.71 25.083 17.186 0 5.648-4.074 10.943-10.898 14.165-.503.237-.82.713-.82 1.231v7.472h-5.362v-4.874a1.34 1.34 0 00-.552-1.069 1.608 1.608 0 00-1.252-.292c-4.196.735-8.199.735-12.4 0a1.62 1.62 0 00-1.252.292c-.35.264-.552.656-.552 1.07v4.873H21.83v-4.935c0-1.972-1.111-3.807-2.973-4.909-3.075-1.82-5.488-4.152-6.977-6.745-1.018-1.774-2.955-2.877-5.055-2.877H3.8c-.114 0-.205-.085-.205-.188v-6.427z'
        fill='#DB77CF'
      />
      <circle cx={18.875} cy={41.233} r={2.617} fill='#FB97FF' />
      <path
        d='M30.215 32.115a1.5 1.5 0 10.347 2.98l-.347-2.98zm16.336 5.346a1.5 1.5 0 001.69-2.48l-1.69 2.48zm-15.99-2.366c1.781-.207 4.774-.335 7.864-.03 3.132.308 6.14 1.041 8.127 2.396l1.69-2.48c-2.619-1.784-6.24-2.578-9.523-2.902-3.325-.328-6.534-.193-8.504.036l.347 2.98z'
        fill='#DB77CF'
      />
      <circle cx={38.762} cy={11.927} r={9.49} stroke='#EADC75' strokeWidth={3} />
      <path
        d='M41.718 13.249c0 .383-.091.702-.274.955-.175.253-.48.553-.916.902-.34.27-.737.432-1.19.485 0 .392.004.627.012.706 0 .087-.03.153-.091.196a.316.316 0 01-.21.066.485.485 0 01-.313-.118.363.363 0 01-.131-.301c0-.148-.01-.318-.026-.51a1.777 1.777 0 01-.537-.105 5.862 5.862 0 01-.419-.17l-.209-.105c-.314-.218-.55-.392-.706-.523a1.861 1.861 0 01-.38-.458 1.155 1.155 0 01-.144-.589c0-.218.048-.366.144-.444.096-.088.27-.131.523-.131a.64.64 0 01.328.091.645.645 0 01.235.223c.288.514.659.833 1.112.955 0-.053.009-.345.026-.877.018-.532.03-1.068.04-1.609-.498-.175-.85-.314-1.06-.419-.846-.418-1.27-1.029-1.27-1.831 0-.34.118-.69.354-1.047.236-.358.51-.61.824-.759.122-.06.297-.13.524-.21a7.75 7.75 0 01.654-.195c0-.245-.005-.423-.013-.537 0-.157.039-.266.117-.327a.357.357 0 01.236-.104c.2 0 .323.07.366.209.053.14.074.38.066.72.279.026.588.13.928.313.393.227.677.428.85.602.184.166.276.38.276.641 0 .149-.061.27-.184.367-.122.096-.322.144-.601.144-.122 0-.28-.123-.471-.367-.175-.192-.31-.31-.406-.353a2.63 2.63 0 01-.17-.052 1.244 1.244 0 00-.236-.079c0 .794-.008 1.452-.026 1.976v.196c.471.21.86.41 1.165.602.418.261.724.523.916.785.191.253.287.615.287 1.086zm-4.134-3.677c0 .175.083.34.249.497.166.149.357.262.575.34l.197.066V8.591a1.675 1.675 0 00-.733.34.808.808 0 00-.288.641zm1.74 4.789c.314-.088.567-.236.759-.445.192-.21.288-.423.288-.641 0-.384-.345-.733-1.034-1.047-.008.445-.013 1.156-.013 2.133z'
        fill='#EADC75'
      />
    </svg>
  )
}
