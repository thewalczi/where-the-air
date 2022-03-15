import React, { FC } from "react"
import { PositionForm } from "../position-form/PositionForm"

import "./TopBar.scss"

export const TopBar: FC = () => {
	return (
		<div className="topbar">
			<div className="topbar__logo"> Where The Air</div>
			<PositionForm />
		</div>
	)
}
