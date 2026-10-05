import { FlexBox } from '@wanteddev/wds'
import type { ReactNode } from 'react'

/** 모바일 폭(최대 480px)으로 가운데 정렬된 전체 높이 화면 */
export function Page({ children }: { children: ReactNode }) {
  return (
    <FlexBox
      flexDirection="column"
      sx={(theme) => ({
        width: '100%',
        maxWidth: 480,
        minHeight: '100dvh',
        margin: '0 auto',
        backgroundColor: theme.semantic.background.normal.normal,
      })}
    >
      {children}
    </FlexBox>
  )
}
