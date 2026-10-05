import {
  Button,
  FlexBox,
  Toast,
  ToastContainer,
  ToastContent,
  Typography,
} from '@wanteddev/wds'
import { IconImage } from '@wanteddev/wds-icon'
import { useState } from 'react'
import { Page } from '../components/Page'
import type { DesignerType } from '../data/types'

type Props = {
  result: DesignerType
  onRestart: () => void
}

export function ResultScreen({ result, onRestart }: Props) {
  const [shareToastOpen, setShareToastOpen] = useState(false)

  return (
    <Page>
      <FlexBox flexDirection="column" gap="24px" flex={1} sx={{ padding: '40px 24px 0' }}>
        <Typography variant="label1" weight="bold" color="semantic.label.alternative" align="center">
          나의 디자이너 유형은
        </Typography>

        {/* 유형 이미지 자리 */}
        <FlexBox
          alignItems="center"
          justifyContent="center"
          aria-label={`${result.name} 이미지`}
          role="img"
          sx={(theme) => ({
            width: '100%',
            aspectRatio: '1 / 1',
            borderRadius: 16,
            backgroundColor: theme.semantic.fill.normal,
            color: theme.semantic.label.assistive,
            '& svg': { width: 48, height: 48 },
          })}
        >
          <IconImage />
        </FlexBox>

        <FlexBox flexDirection="column" gap="8px" alignItems="center">
          <Typography as="h1" variant="title2" weight="bold" color="semantic.label.strong" align="center">
            {result.name}
          </Typography>
          <Typography variant="body1" weight="medium" color="semantic.primary.normal" align="center">
            {result.tagline}
          </Typography>
        </FlexBox>

        <Typography variant="body1-reading" color="semantic.label.neutral">
          {result.description}
        </Typography>
      </FlexBox>

      <FlexBox gap="8px" sx={{ padding: '32px 24px' }}>
        <Button size="large" variant="outlined" color="assistive" fullWidth onClick={onRestart}>
          다시하기
        </Button>
        <Button size="large" fullWidth onClick={() => setShareToastOpen(true)}>
          공유하기
        </Button>
      </FlexBox>

      {/* 공유 기능은 아직 없어서 안내만 띄운다 */}
      <Toast open={shareToastOpen} onOpenChange={setShareToastOpen}>
        <ToastContainer>
          <ToastContent>공유 기능은 준비 중이에요</ToastContent>
        </ToastContainer>
      </Toast>
    </Page>
  )
}
