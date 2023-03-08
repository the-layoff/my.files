import React from "react";
import ModuleHeader from "../../components/Headers/moduleHeader";

const Files = () => {
	return (
		<div className='mf-bg-slate-800 mf-ring-slate-900/5 mf-rounded-lg mf-bg-black mf-p-8 mf-px-6 mf-py-8 mf-text-white mf-shadow-xl mf-ring-1'>
			<ModuleHeader
				primary={false}
				headerContent='Files'
				headerTag='h1'
				center={true}
			/>
		</div>
	);
};

export default Files;
