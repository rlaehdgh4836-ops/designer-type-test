import {
  Button,
  FlexBox,
  ProgressIndicator,
  TopNavigation,
  TopNavigationButton,
  Typography,
} from '@wanteddev/wds'
import { IconChevronLeft } from '@wanteddev/wds-icon'
import { Page } from '../components/Page'
import type { Question } from '../data/questions'
import type { DesignerTypeId } from '../data/types'

type Props = {
  question: Question
  index: number
  total: number
  selected?: DesignerTypeId
  onSelect: (type: DesignerTypeId) => void
  onBack: () => void
}

export function QuestionScreen({ question, index, total, selected, onSelect, onBack }: Props) {
  return (
    <Page>
      <TopNavigation
        leadingContent={
          <TopNavigationButton aria-label="이전으로" onClick={onBack}>
            <IconChevronLeft />
          </TopNavigationButton>
        }
        toolbar={<ProgressIndicator percent={((index + 1) / total) * 100} />}
      >
        {index + 1} / {total}
      </TopNavigation>

      <FlexBox flexDirection="column" gap="32px" sx={{ padding: '40px 24px' }}>
        <Typography
          as="h1"
          variant="title3"
          weight="bold"
          color="semantic.label.strong"
          sx={{ whiteSpace: 'pre-line' }}
        >
          {`Q${index + 1}.\n${question.title}`}
        </Typography>

        {/* 문항이 바뀌면 버튼을 새로 그려 이전 문항의 포커스·눌림 상태가 남지 않게 한다 */}
        <FlexBox key={index} flexDirection="column" gap="12px">
          {question.choices.map((choice) => {
            const isSelected = selected === choice.type
            return (
              <Button
                key={choice.label}
                size="large"
                fullWidth
                variant={isSelected ? 'solid' : 'outlined'}
                color={isSelected ? 'primary' : 'assistive'}
                aria-pressed={isSelected}
                onClick={() => onSelect(choice.type)}
                sx={{ height: 'auto', minHeight: 56, whiteSpace: 'normal' }}
              >
                {choice.label}
              </Button>
            )
          })}
        </FlexBox>
      </FlexBox>
    </Page>
  )
}
