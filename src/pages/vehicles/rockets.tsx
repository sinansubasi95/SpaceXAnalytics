import {ThreeColumnLayout} from '@/components/Layout/ThreeColumnLayout';
import {LaunchesPanel} from '@/components/Panel/LaunchesPanel';

export default function Rockets() {
  return (
    <ThreeColumnLayout leftPanel={<div>Rockets</div>}>
      <div>rocket</div>
    </ThreeColumnLayout>
  )
}