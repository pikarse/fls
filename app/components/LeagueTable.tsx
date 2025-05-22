'use client';

interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

const LeagueTable = () => {
  const teams = [
    {
      position: 1,
      name: "RMFC - 2",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 2,
      name: "BFC - Белые",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 3,
      name: "KarFC",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 4,
      name: "RMFC- Binakensk",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 5,
      name: "RangersScauts",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 6,
      name: "Astanada - 2",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 7,
      name: "Manchester Scauts",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 8,
      name: "Almalyk United",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 9,
      name: "DatraFC",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    },
    {
      position: 10,
      name: "SDUSHOR C.F",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-3 text-left text-sm font-semibold text-white">Поз</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-white">Команда</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">И</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">В</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">Н</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">П</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">ЗГ</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">ПГ</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-white">О</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.position} className="border-b border-gray-700 hover:bg-gray-800/50">
              <td className="px-4 py-3 text-sm text-gray-300">{team.position}</td>
              <td className="px-4 py-3 text-sm font-medium text-white">{team.name}</td>
              <td className="px-4 py-3 text-sm text-center text-gray-300">{team.played}</td>
              <td className="px-4 py-3 text-sm text-center text-gray-300">{team.won}</td>
              <td className="px-4 py-3 text-sm text-center text-gray-300">{team.drawn}</td>
              <td className="px-4 py-3 text-sm text-center text-gray-300">{team.lost}</td>
              <td className="px-4 py-3 text-sm text-center text-gray-300">{team.goalsFor}</td>
              <td className="px-4 py-3 text-sm text-center text-gray-300">{team.goalsAgainst}</td>
              <td className="px-4 py-3 text-sm text-center font-bold text-red-600">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable; 