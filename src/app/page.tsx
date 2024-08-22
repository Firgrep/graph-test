import ChartsOverviewDemo, { BasicLineChart } from "./MUIChart";

export default function Home() {
    return (
        <div className="h-full w-full">
            <div className="text-2xl text-center">Graphs test 📊</div>
            <div className="flex flex-col items-center justify-center">
                <BasicLineChart />
                <ChartsOverviewDemo />
            </div>
        </div>
    );
}
