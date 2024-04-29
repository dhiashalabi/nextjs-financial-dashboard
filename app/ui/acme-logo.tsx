import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import ThemeSwitch from './theme-switch'

export default function AcmeLogo() {
  return (
    <div className="flex flex-row justify-between">
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
        <p className="mr-2 text-[44px]">Acme</p>
        <ThemeSwitch />
      </div>
    </div>
  )
}
