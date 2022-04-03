import React, { FC, useContext } from "react"
import { Installation } from "../../api"
import { PositionContext } from "../../context/PositionContext"
import "./SidePanel.scss"

export const SidePanel: FC = () => {
	const { installations } = useContext(PositionContext)

	return (
		<div className="sidepanel">
			<ul className="sidepanel__list">
				{installations.map(
					(installation: Installation, index: number, arr: Installation[]) => {
						const { street, number, city } = installation.address
						return (
							<>
								{index === 0 ? (
									<span className="sidepanel__list-label">
										Nearest installation
									</span>
								) : null}
								<li key={`${installation.id}`} className="sidepanel__list-item">
									<span>
										{street} {number}, {city}
									</span>
								</li>
								{index === 0 && arr[index + 1] ? (
									<span className="sidepanel__list-label">
										Other installations close to your location
									</span>
								) : null}
							</>
						)
					}
				)}
			</ul>
		</div>
	)
}
