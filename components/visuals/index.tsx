import type { ProjectVisual } from "@/types";
import { WaveformVisual } from "./waveform";
import { PointCloudVisual } from "./point-cloud";
import { MarketplaceVisual } from "./marketplace";
import { GenericVisual } from "./generic";

const visualMap: Record<ProjectVisual, React.ComponentType<{ className?: string }>> = {
  waveform: WaveformVisual,
  pointcloud: PointCloudVisual,
  marketplace: MarketplaceVisual,
  generic: GenericVisual,
};

function ProjectVisualIcon({ visual, className }: { visual: ProjectVisual; className?: string }) {
  const Visual = visualMap[visual];
  return <Visual className={className} />;
}

export { ProjectVisualIcon, WaveformVisual, PointCloudVisual, MarketplaceVisual, GenericVisual };
