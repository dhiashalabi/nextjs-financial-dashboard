import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import ThemeSwitch from './theme-switch'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex items-center justify-between`}>
      <div className="flex items-center gap-2 text-white">
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
        <p className="mr-2 text-[44px]">Acme</p>
      </div>
      <div className="flex items-center gap-2 text-white">
        <ThemeSwitch />
      </div>
    </div>
  )
}
