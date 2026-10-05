import { Button, FlexBox, Typography } from '@wanteddev/wds'
import { Page } from '../components/Page'
import { questions } from '../data/questions'

export function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <Page>
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        gap="12px"
        flex={1}
        sx={{ padding: '0 24px' }}
      >
        <Typography variant="label1" weight="bold" color="semantic.primary.normal">
          디자이너 유형 테스트
        </Typography>
        <Typography as="h1" variant="title2" weight="bold" color="semantic.label.strong">
          나는 어떤
          <br />
          디자이너일까?
        </Typography>
        <Typography variant="body1-reading" color="semantic.label.alternative">
          일하는 방식에 관한 질문에 답하고 나의 디자이너 유형을 알아보세요.
          결과를 동료와 나누며 서로의 스타일을 이야기해 봐요.
        </Typography>
        <Typography variant="label2" color="semantic.label.assistive" sx={{ marginTop: 8 }}>
          {questions.length}문항 · 약 1분 소요
        </Typography>
      </FlexBox>
      <FlexBox sx={{ padding: '16px 24px 32px' }}>
        <Button size="large" fullWidth onClick={onStart}>
          테스트 시작하기
        </Button>
      </FlexBox>
    </Page>
  )
}
