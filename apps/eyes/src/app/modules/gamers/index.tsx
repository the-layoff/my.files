import React from "react";
import Button from "../../components/Buttons/button";
import ModuleHeader from "../../components/Headers/moduleHeader";

export const myDivide = (a: number, b: number): number => {
	const result = a / b;
	if (b === 0) throw new EvalError("You cannot divide by zero dumb ass!");
	return result;
};

const Gamers = () => {
	return (
		<div className='mf-bg-white mf-p mf-shadow-xl mf-ring-1'>
			<ModuleHeader
				primary={true}
				headerContent='Gamer'
				headerTag='h1'
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: "2rem",
					width: "50%",
					padding: "20px 5px",
					alignItems: "center",
					justifyContent: "center",
					placeItems: "center",
					marginTop: "0",
					marginLeft: "auto",
					marginRight: "auto",
					marginBottom: "0",
				}}
			>
				<Button type='primary' label='Game' />
				<Button type='secondary' label='World' />
				<Button label='Mole' />
				<Button type='pill' label='Love' />
			</div>
		</div>
	);
};

export default Gamers;
