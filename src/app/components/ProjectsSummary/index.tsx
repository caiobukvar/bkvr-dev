export default function ProjectsSummary() {
  return (
    <div className="flex flex-col max-w-screen-lg gap-16 p-4 animate-slide-in-left">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">My projects:</h3>
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-2">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
