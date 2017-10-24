import * as React from 'react'
import styled from 'styled-components/native'

// TODO(jan): Animate

export interface ProgressBarProps {
  progress: number
  backgroundColor?: string
  barColor: string
}

export const ProgressBar = ({
  progress,
  backgroundColor = '#d9d9d9',
  barColor,
}: ProgressBarProps) => (
  <Container color={backgroundColor}>
    <DoneSection progress={progress} color={barColor} />
    <LeftSection progress={progress} />
  </Container>
)

interface ContainerProps {
  color: string
}
const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 8;
  background-color: ${(p: ContainerProps) => p.color};
  border-radius: 1;
`

interface DoneSectionProps {
  progress: number
  color: string
}
const DoneSection = styled.View`
  border-top-left-radius: 1;
  border-bottom-left-radius: 1;
  flex: ${(p: DoneSectionProps) => p.progress};
  background-color: ${(p: DoneSectionProps) => p.color};
`

interface LeftSectionProps {
  progress: number
}
const LeftSection = styled.View`
  flex: ${(p: LeftSectionProps) => 1 - p.progress};
`
