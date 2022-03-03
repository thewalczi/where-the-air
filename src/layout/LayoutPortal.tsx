import React, { FC } from "react"

import "./LayoutPortal.scss"

export const LayoutPortal: FC = ({ children }) => {
	return <div className="layout">{children}</div>
}
