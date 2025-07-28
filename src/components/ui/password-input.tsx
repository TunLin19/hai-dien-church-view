import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'

export const PasswordInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          className={cn('pl-10 pr-10', className)}
          {...props}
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
