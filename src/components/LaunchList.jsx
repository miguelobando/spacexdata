import { LaunchItem } from './LaunchItem'

export function LaunchList({ launches}){
  return(
      <>
        {launches.map((launch) =>
          <ul>
            <LaunchItem key={launch.flight_number} {...launch} />
          </ul>
        )}
      </>
    )
}