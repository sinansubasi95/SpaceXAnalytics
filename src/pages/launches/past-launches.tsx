import {ThreeColumnLayout} from '../../components/Layout/ThreeColumnLayout';
import LaunchesPanel from '../../components/Panel/LaunchesPanel';

export default function PastLaunches() {
  return (
    <ThreeColumnLayout leftPanel={<LaunchesPanel/>}>
      <div>test</div>
    </ThreeColumnLayout>
  )
}
