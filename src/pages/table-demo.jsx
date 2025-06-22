import Table from '../components/table'
        
    const columns = ["Types", "Avg. Efficiency (%)", "Lifespan (Years)", "Pros", "Cons"];
    const rows = [
    ["Monocrystalline	", "20-25",	"30-40",	"Most efficient type available",	"More expensive than some types"],
    ["Polycrystalline", "18-21", "25-30", "cheaper than monocrystalline", "Discontinued (not available)"],
    ["Thin-film",	"17-19",	"10-20",	"Most flexible option",	"Low power output"],
    ["Transparent",	"1",	"25-35",	"Blends in with windows",	"Low efficiency"],
    ["Solar tiles", "10-20",	"25-30",	"Blends in with roofs",	"Very expensive"],
    ["Perovskite",	"29-31",	"25-35",	"Highest efficiency",	"Not yet commercially available"],
    ];
export default function TabDemo() {
  return (
    <div className="flex justify-center items-center mb-4 flex-wrap text-neutral-hovered">
        <div className="w-full overflow-x-auto border border-neutral-regular rounded-curve-xl justify-start items-center flex mb-20">
          <div className="p-4">
            <Table columns={columns} rows={rows} size="md" style="primary" />
          </div>
        </div>
    </div>
  );
}