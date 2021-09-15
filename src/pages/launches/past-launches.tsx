import {ThreeColumnLayout} from '../../components/Layout/ThreeColumnLayout';

export default function PastLaunches() {
  const mainContent = () => (
    <div>mainContent</div>
  )

  return (
    <ThreeColumnLayout leftPanel={mainContent()}>
      <div>test</div>
    </ThreeColumnLayout>
  )
}
