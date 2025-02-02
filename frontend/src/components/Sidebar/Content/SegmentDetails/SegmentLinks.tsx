import { ListItemLink, ListItemText, ListSubheader } from "@react-md/list";
import { OpenInNewSVGIcon } from "@react-md/material-icons";
import { Segment } from "zwift-data";
import { StravaAvatar, WhatsOnZwiftAvatar } from "../../../Avatar";

interface Props {
  segment: Segment;
}

export function SegmentLinks({ segment }: Props) {
  return (
    <>
      <ListSubheader>Links</ListSubheader>
      {segment.stravaSegmentUrl && (
        <ListItemLink
          href={segment.stravaSegmentUrl}
          target="_blank"
          leftAddon={
            <div>
              <StravaAvatar />
            </div>
          }
          leftAddonType="avatar"
          rightAddon={<OpenInNewSVGIcon />}
          rightAddonType="icon"
        >
          <ListItemText>Strava Segment</ListItemText>
        </ListItemLink>
      )}
      {segment.whatsOnZwiftUrl && (
        <ListItemLink
          href={segment.whatsOnZwiftUrl}
          target="_blank"
          leftAddon={
            <div>
              <WhatsOnZwiftAvatar />
            </div>
          }
          leftAddonType="avatar"
          rightAddon={<OpenInNewSVGIcon />}
          rightAddonType="icon"
        >
          <ListItemText>What&apos;s on Zwift</ListItemText>
        </ListItemLink>
      )}
    </>
  );
}
