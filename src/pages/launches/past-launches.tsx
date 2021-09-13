import {ThreeColumnLayout} from '../../components/Layout/ThreeColumnLayout';

export default function PastLaunches() {
  const mainContent = () => (
    <div>mainContent</div>
  )

  const secondaryColumn = () => (
    <div>secondayColumn</div>
  )

  return (
    <ThreeColumnLayout mainContent={mainContent()} secondaryColumn={secondaryColumn()}/>
  )
}
