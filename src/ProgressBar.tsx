import * as React from 'react'
import styled from 'styled-components/native'

// TODO(jan): Animate

export interface ProgressBarProps {
  height?: number
  progress: number
  backgroundColor?: string
  barColor: string
}

export const ProgressBar = ({
  height = 8,
  progress,
  backgroundColor = '#d9d9d9',
  barColor,
}: ProgressBarProps) => (
  <Container color={backgroundColor} height={height}>
    <DoneSection progress={progress} color={barColor} />
    <LeftSection progress={progress} />
  </Container>
)

interface ContainerProps {
  color: string
  height: number
}
const Container = styled.View`
  flex: 0;
  flex-direction: row;
  height: ${(p: ContainerProps) => p.height};
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
  flex: ${(p: DoneSectionProps) => Math.max(1, p.progress)};
  background-color: ${(p: DoneSectionProps) => p.color};
`

interface LeftSectionProps {
  progress: number
}
const LeftSection = styled.View`
  flex: ${(p: LeftSectionProps) => Math.min(0, 1 - p.progress)};
`
