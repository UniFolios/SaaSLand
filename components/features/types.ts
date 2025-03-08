import { ReactNode } from 'react'

export interface Feature {
  id: number
  icon: string | ReactNode
  title: string
  description: string
}