'use client';

import { useMemo, useState } from "react";

const MONTHLY_DUE = 150_000;
const PAGE_SIZE = 10;

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const formatCurrency = (value: number) => currencyFormatter.format(value);

const months = [
  {
    key: "2024-11",
    label: "November 2024",
    shortLabel: "Nov '24",
    isActive: true,
  },
  {
    key: "2024-12",
    label: "December 2024",
    shortLabel: "Dec '24",
    isActive: false,
  },
  {
    key: "2025-01",
    label: "January 2025",
    shortLabel: "Jan '25",
    isActive: true,
  },
  {
    key: "2025-02",
    label: "February 2025",
    shortLabel: "Feb '25",
    isActive: true,
  },
  {
    key: "2025-03",
    label: "March 2025",
    shortLabel: "Mar '25",
    isActive: true,
  },
  {
    key: "2025-04",
    label: "April 2025",
    shortLabel: "Apr '25",
    isActive: true,
  },
  {
    key: "2025-05",
    label: "May 2025",
    shortLabel: "May '25",
    isActive: true,
  },
] as const;

type MonthKey = (typeof months)[number]["key"];

type ResidentPayment = {
  name: string;
  block: string;
  payments: Record<MonthKey, number | null>;
};

const basePaymentTemplate: Record<MonthKey, number | null> = {
  "2024-11": 150_000,
  "2024-12": null,
  "2025-01": 150_000,
  "2025-02": 150_000,
  "2025-03": 150_000,
  "2025-04": 150_000,
  "2025-05": 150_000,
};

const createPayments = (
  overrides: Partial<Record<MonthKey, number | null>> = {},
): Record<MonthKey, number | null> => ({
  ...basePaymentTemplate,
  ...overrides,
});

const residents: ResidentPayment[] = [
  {
    name: "Gerald Alexander",
    block: "5A.01/03",
    payments: createPayments({}),
  },
  {
    name: "Alan Walker",
    block: "5A.01/04",
    payments: createPayments({
      "2024-11": null,
    }),
  },
  {
    name: "Jefri Husain",
    block: "5A.01/05",
    payments: createPayments({
      "2025-01": null,
      "2025-02": null,
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "Muhammad Rizky Endhi Mulyasari",
    block: "5A.01/06",
    payments: createPayments({
      "2024-11": 200_000,
    }),
  },
  {
    name: "Bagus Santoso",
    block: "5A.01/07",
    payments: createPayments({}),
  },
  {
    name: "Bambang",
    block: "5A.01/08",
    payments: createPayments({}),
  },
  {
    name: "Sukirman",
    block: "5A.01/09",
    payments: createPayments({
      "2025-05": null,
    }),
  },
  {
    name: "Yuliyanto",
    block: "5A.01/10",
    payments: createPayments({}),
  },
  {
    name: "Eko Cahyono",
    block: "5A.01/11",
    payments: createPayments({}),
  },
  {
    name: "Muhamad Ikhsan",
    block: "5A.01/12",
    payments: createPayments({}),
  },
  {
    name: "Shamsoedin",
    block: "5A.01/13",
    payments: createPayments({}),
  },
  {
    name: "Heni Panglima",
    block: "5A.01/14",
    payments: createPayments({}),
  },
  {
    name: "Sulaeman",
    block: "5A.01/15",
    payments: createPayments({}),
  },
  {
    name: "Halimansyah",
    block: "5A.01/16",
    payments: createPayments({}),
  },
  {
    name: "Mardatu",
    block: "5A.01/17",
    payments: createPayments({}),
  },
  {
    name: "Tarman",
    block: "5A.01/18",
    payments: createPayments({
      "2025-02": null,
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "HARISTON",
    block: "5A.01/19",
    payments: createPayments({
      "2024-11": null,
      "2025-01": null,
      "2025-02": null,
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "Oida",
    block: "5A.01/20",
    payments: createPayments({
      "2025-01": null,
      "2025-02": null,
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "Dede Badariah",
    block: "5A.01/21",
    payments: createPayments({
      "2025-01": null,
      "2025-02": null,
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "Reyno Yulian Trianto / Ugo Joibella",
    block: "5A.02/01",
    payments: createPayments({}),
  },
  {
    name: "Siti Khotijah",
    block: "5A.02/02",
    payments: createPayments({}),
  },
  {
    name: "Dede Abduloh",
    block: "5A.02/03",
    payments: createPayments({}),
  },
  {
    name: "Maretha Rahayu",
    block: "5A.02/04",
    payments: createPayments({
      "2025-01": null,
      "2025-02": null,
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "Nining Pahriani",
    block: "5A.02/05",
    payments: createPayments({}),
  },
  {
    name: "Yunita Wulan Sari",
    block: "5A.02/06",
    payments: createPayments({}),
  },
  {
    name: "Ayu Dianingsih",
    block: "5A.02/07",
    payments: createPayments({}),
  },
  {
    name: "Zaenal Abidin",
    block: "5A.02/08",
    payments: createPayments({}),
  },
  {
    name: "Anita Widiastuti",
    block: "5A.02/09",
    payments: createPayments({}),
  },
  {
    name: "Setiyawan",
    block: "5A.02/10",
    payments: createPayments({}),
  },
  {
    name: "Dede Yanto",
    block: "5A.02/11",
    payments: createPayments({
      "2025-03": null,
      "2025-04": null,
      "2025-05": null,
    }),
  },
  {
    name: "Irna Nurfadilah",
    block: "5A.02/12",
    payments: createPayments({}),
  },
  {
    name: "Asep Dedi",
    block: "5A.02/13",
    payments: createPayments({}),
  },
  {
    name: "Sugianto",
    block: "5A.02/14",
    payments: createPayments({}),
  },
  {
    name: "Muhamad Erwin",
    block: "5A.02/15",
    payments: createPayments({}),
  },
  {
    name: "Ahmad Nurrohim",
    block: "5A.02/16",
    payments: createPayments({
      "2025-05": null,
    }),
  },
  {
    name: "Endang Sulastini",
    block: "5A.02/17",
    payments: createPayments({}),
  },
  {
    name: "Siti Anifah",
    block: "5A.02/18",
    payments: createPayments({}),
  },
  {
    name: "Lilis Kusnendi",
    block: "5A.02/19",
    payments: createPayments({}),
  },
  {
    name: "Nurrohim",
    block: "5A.02/20",
    payments: createPayments({
      "2025-05": null,
    }),
  },
  {
    name: "Anisa Fitriana",
    block: "5A.02/21",
    payments: createPayments({}),
  },
  {
    name: "Iis Istikomah",
    block: "5A.03/01",
    payments: createPayments({}),
  },
  {
    name: "Ayatullah",
    block: "5A.03/02",
    payments: createPayments({}),
  },
  {
    name: "Sriwi",
    block: "5A.03/03",
    payments: createPayments({}),
  },
  {
    name: "Husnul Chatimah",
    block: "5A.03/04",
    payments: createPayments({}),
  },
  {
    name: "Sari",
    block: "5A.03/05",
    payments: createPayments({}),
  },
  {
    name: "Sri Sumarni",
    block: "5A.03/06",
    payments: createPayments({}),
  },
  {
    name: "Sutini",
    block: "5A.03/07",
    payments: createPayments({}),
  },
  {
    name: "Heti",
    block: "5A.03/08",
    payments: createPayments({}),
  },
  {
    name: "Sri Mulyani",
    block: "5A.03/09",
    payments: createPayments({}),
  },
  {
    name: "Oom Komalasari",
    block: "5A.03/10",
    payments: createPayments({}),
  },
  {
    name: "Marini",
    block: "5A.03/11",
    payments: createPayments({}),
  },
  {
    name: "Seli",
    block: "5A.03/12",
    payments: createPayments({}),
  },
  {
    name: "Rehana Tanjung Singapura Fitrieka",
    block: "5A.03/13",
    payments: createPayments({}),
  },
  {
    name: "Wahyu Saputra",
    block: "5A.03/14",
    payments: createPayments({
      "2024-11": 300_000,
    }),
  },
  {
    name: "Asep Akbar",
    block: "5A.03/15",
    payments: createPayments({}),
  },
];

type PaymentStatus = "Up to date" | "Slightly behind" | "At risk" | "No payments";

const statusOptions: { label: string; value: "all" | PaymentStatus }[] = [
  { label: "All statuses", value: "all" },
  { label: "Up to date", value: "Up to date" },
  { label: "Slightly behind", value: "Slightly behind" },
  { label: "At risk", value: "At risk" },
  { label: "No payments", value: "No payments" },
];

const determineStatus = (
  paidMonths: number,
  totalMonths: number,
): PaymentStatus => {
  if (paidMonths === 0) {
    return "No payments";
  }

  if (paidMonths >= totalMonths) {
    return "Up to date";
  }

  const missed = totalMonths - paidMonths;

  if (missed <= 2) {
    return "Slightly behind";
  }

  return "At risk";
};

const statusStyles: Record<PaymentStatus, string> = {
  "Up to date":
    "border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-emerald-300",
  "Slightly behind":
    "border border-amber-500/30 bg-amber-500/15 px-2.5 py-1 text-amber-300",
  "At risk":
    "border border-rose-500/30 bg-rose-500/15 px-2.5 py-1 text-rose-200",
  "No payments":
    "border border-red-500/40 bg-red-600/20 px-2.5 py-1 text-red-200",
};

const AdminPage = () => {
  const activeMonths = useMemo(
    () => months.filter((month) => month.isActive),
    [],
  );

  const availableYears = useMemo(
    () => Array.from(new Set(months.map((month) => month.key.slice(0, 4)))).sort(),
    [],
  );

  const blockGroups = useMemo(
    () =>
      Array.from(
        new Set(
          residents.map(
            (resident) => resident.block.split("/")[0] ?? resident.block,
          ),
        ),
      ).sort(),
    [],
  );

  const [statusFilter, setStatusFilter] = useState<"all" | PaymentStatus>("all");
  const [yearFilter, setYearFilter] = useState<"all" | string>("all");
  const [blockFilter, setBlockFilter] = useState<"all" | string>("all");
  const [page, setPage] = useState(1);

  const yearOptions = useMemo(
    () => [
      { label: "All years", value: "all" as const },
      ...availableYears.map((year) => ({ label: year, value: year })),
    ],
    [availableYears],
  );

  const blockOptions = useMemo(
    () => [
      { label: "All blocks", value: "all" as const },
      ...blockGroups.map((group) => ({ label: `Block ${group}`, value: group })),
    ],
    [blockGroups],
  );

  const displayedMonths = useMemo(
    () =>
      yearFilter === "all"
        ? months
        : months.filter((month) => month.key.startsWith(yearFilter)),
    [yearFilter],
  );

  const displayedActiveMonths = useMemo(
    () => displayedMonths.filter((month) => month.isActive),
    [displayedMonths],
  );

  const residentMetrics = useMemo(
    () =>
      residents.map((resident) => {
        const blockGroup = resident.block.split("/")[0] ?? resident.block;
        const paidMonths = activeMonths.filter((month) => {
          const amount = resident.payments[month.key];
          return typeof amount === "number" && amount > 0;
        });

        const totalPaid = paidMonths.reduce((sum, month) => {
          const amount = resident.payments[month.key] ?? 0;
          return sum + amount;
        }, 0);

        const outstanding = Math.max(
          activeMonths.length * MONTHLY_DUE - totalPaid,
          0,
        );

        const status = determineStatus(paidMonths.length, activeMonths.length);

        const nextDue = (() => {
          const missing = activeMonths.find((month) => {
            const amount = resident.payments[month.key];
            return !amount;
          });

          return missing ? missing.label : "Lunas";
        })();

        return {
          ...resident,
          blockGroup,
          paidCount: paidMonths.length,
          totalPaid,
          outstanding,
          status,
          nextDue,
        };
      }),
    [activeMonths],
  );

  const totalCollected = residentMetrics.reduce(
    (sum, resident) => sum + resident.totalPaid,
    0,
  );
  const totalExpected =
    activeMonths.length * residents.length * MONTHLY_DUE;
  const collectionRate =
    totalExpected === 0 ? 0 : (totalCollected / totalExpected) * 100;

  const onTrackCount = residentMetrics.filter(
    (resident) => resident.status === "Up to date",
  ).length;
  const slightlyBehindCount = residentMetrics.filter(
    (resident) => resident.status === "Slightly behind",
  ).length;
  const atRiskCount = residentMetrics.filter(
    (resident) => resident.status === "At risk",
  ).length;
  const noPaymentCount = residentMetrics.filter(
    (resident) => resident.status === "No payments",
  ).length;

  const monthlyTotals = months.map((month) => {
    const collected = residents.reduce((sum, resident) => {
      const amount = resident.payments[month.key] ?? 0;
      return sum + amount;
    }, 0);

    const expected = month.isActive ? residents.length * MONTHLY_DUE : 0;
    const outstanding = Math.max(expected - collected, 0);

    return {
      ...month,
      collected,
      expected,
      outstanding,
    };
  });

  const tableResidents = useMemo(
    () =>
      residentMetrics.map((resident) => {
        const paidMonths = displayedActiveMonths.filter((month) => {
          const amount = resident.payments[month.key];
          return typeof amount === "number" && amount > 0;
        });

        const totalPaid = displayedMonths.reduce((sum, month) => {
          const amount = resident.payments[month.key] ?? 0;
          return sum + amount;
        }, 0);

        const totalPaidActive = displayedActiveMonths.reduce((sum, month) => {
          const amount = resident.payments[month.key] ?? 0;
          return sum + amount;
        }, 0);

        const outstanding = Math.max(
          displayedActiveMonths.length * MONTHLY_DUE - totalPaidActive,
          0,
        );

        const status =
          displayedActiveMonths.length > 0
            ? determineStatus(
                paidMonths.length,
                displayedActiveMonths.length,
              )
            : "Up to date";

        const nextDue =
          displayedActiveMonths.length === 0
            ? "N/A"
            : (() => {
                const missing = displayedActiveMonths.find((month) => {
                  const amount = resident.payments[month.key];
                  return !amount;
                });

                return missing ? missing.label : "Lunas";
              })();

        return {
          ...resident,
          displayPaidCount: paidMonths.length,
          displayTotalPaid: totalPaid,
          displayOutstanding: outstanding,
          displayStatus: status,
          displayNextDue: nextDue,
        };
      }),
    [residentMetrics, displayedActiveMonths, displayedMonths],
  );

  const filteredResidents = useMemo(
    () =>
      tableResidents.filter((resident) => {
        const matchesStatus =
          statusFilter === "all" || resident.displayStatus === statusFilter;
        const matchesBlock =
          blockFilter === "all" || resident.blockGroup === blockFilter;

        return matchesStatus && matchesBlock;
      }),
    [tableResidents, statusFilter, blockFilter],
  );

  const totalPages = Math.max(1, Math.ceil(filteredResidents.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedResidents = filteredResidents.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );
  const showingFrom = filteredResidents.length === 0 ? 0 : startIndex + 1;
  const showingTo =
    filteredResidents.length === 0
      ? 0
      : Math.min(startIndex + PAGE_SIZE, filteredResidents.length);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="space-y-3">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            RT 04 Darmawangsa Residence Cluster Sriwijaya
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Iuran Pemeliharaan Lingkungan Dashboard
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            Digitalized from the latest spreadsheet submission to help the
            management team monitor instalment progress across the
            neighbourhood. Each resident is expected to contribute
            <span className="font-semibold text-slate-100">
              {" "}
              {formatCurrency(MONTHLY_DUE)}
            </span>{" "}
            per month for shared services.
          </p>
        </header>

        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm text-slate-300">Total residents</p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {residents.length}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm text-slate-300">Collection rate</p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {collectionRate.toFixed(1)}%
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {formatCurrency(totalCollected)} collected of
                {" "}
                {formatCurrency(totalExpected)} expected
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm text-slate-300">On track</p>
              <p className="mt-2 text-3xl font-semibold text-emerald-300">
                {onTrackCount}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm text-slate-300">1-2 months behind</p>
              <p className="mt-2 text-3xl font-semibold text-amber-300">
                {slightlyBehindCount}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm text-slate-300">3+ months behind</p>
              <p className="mt-2 text-3xl font-semibold text-rose-200">
                {atRiskCount}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm text-slate-300">No payments recorded</p>
              <p className="mt-2 text-3xl font-semibold text-red-200">
                {noPaymentCount}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Monthly collection snapshot
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-300">
                Comparing collected dues against the expected target of
                {" "}
                {formatCurrency(MONTHLY_DUE)} per household.
              </p>
            </div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Updated May 2025
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {monthlyTotals.map((month) => (
              <div
                key={month.key}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner"
              >
                <p className="text-sm font-semibold text-white">
                  {month.label}
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Collected</span>
                    <span className="font-medium text-slate-100">
                      {formatCurrency(month.collected)}
                    </span>
                  </div>
                  {month.isActive ? (
                    <div className="flex items-center justify-between">
                      <span>Outstanding</span>
                      <span className="font-medium text-amber-200">
                        {formatCurrency(month.outstanding)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Tracking</span>
                      <span>Not in target cycle</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Resident payment details
              </h2>
              <p className="text-sm text-slate-300">
                Highlighted rows require follow-up from the treasurer team.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
              Status legend: <span className="text-emerald-300">On track</span>,
              <span className="text-amber-300"> 1-2 months late</span>,
              <span className="text-rose-200"> 3+ months late</span>,
              <span className="text-red-200"> no payments</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap gap-3">
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Status
                <select
                  value={statusFilter}
                  onChange={(event) => {
                    setStatusFilter(event.target.value as PaymentStatus | "all");
                    setPage(1);
                  }}
                  className="min-w-[160px] rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Tahun
                <select
                  value={yearFilter}
                  onChange={(event) => {
                    setYearFilter(event.target.value);
                    setPage(1);
                  }}
                  className="min-w-[140px] rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  {yearOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Blok rumah
                <select
                  value={blockFilter}
                  onChange={(event) => {
                    setBlockFilter(event.target.value);
                    setPage(1);
                  }}
                  className="min-w-[160px] rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  {blockOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {displayedMonths.length === months.length
                ? "Menampilkan seluruh bulan"
                : `Fokus pada periode ${
                    displayedMonths.length > 0
                      ? displayedMonths
                          .map((month) => month.shortLabel)
                          .join(", ")
                      : "-"
                  }`}
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/10 text-xs uppercase tracking-wide text-slate-300">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Block</th>
                  {displayedMonths.map((month) => (
                    <th
                      key={month.key}
                      className={`px-6 py-4 ${
                        month.isActive ? "text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {month.shortLabel}
                    </th>
                  ))}
                  <th className="px-6 py-4">Paid</th>
                  <th className="px-6 py-4">Total paid</th>
                  <th className="px-6 py-4">Outstanding</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Next due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {paginatedResidents.length === 0 ? (
                  <tr>
                    <td
                      className="px-6 py-10 text-center text-sm text-slate-300"
                      colSpan={displayedMonths.length + 7}
                    >
                      Tidak ada data yang sesuai dengan filter saat ini.
                    </td>
                  </tr>
                ) : (
                  paginatedResidents.map((resident) => (
                    <tr
                      key={resident.name}
                      className={
                        resident.displayOutstanding > 0
                          ? "bg-rose-500/5 transition-colors hover:bg-rose-500/10"
                          : "transition-colors hover:bg-white/5"
                      }
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                        {resident.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-300">
                        {resident.block}
                      </td>
                      {displayedMonths.map((month) => {
                        const amount = resident.payments[month.key];
                        const display =
                          typeof amount === "number"
                            ? formatCurrency(amount)
                            : "—";

                        return (
                          <td
                            key={`${resident.name}-${month.key}`}
                            className={`whitespace-nowrap px-6 py-4 text-sm ${
                              month.isActive ? "text-slate-100" : "text-slate-500"
                            }`}
                          >
                            {display}
                          </td>
                        );
                      })}
                      <td className="whitespace-nowrap px-6 py-4 text-slate-100">
                        {displayedActiveMonths.length > 0
                          ? `${resident.displayPaidCount}/${displayedActiveMonths.length}`
                          : "—"}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-100">
                        {formatCurrency(resident.displayTotalPaid)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {displayedActiveMonths.length > 0 ? (
                          resident.displayOutstanding > 0 ? (
                            <span className="text-amber-200">
                              {formatCurrency(resident.displayOutstanding)}
                            </span>
                          ) : (
                            <span className="text-slate-500">Lunas</span>
                          )
                        ) : (
                          <span className="text-slate-500">Tidak ada tagihan</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`${
                            statusStyles[resident.displayStatus]
                          } rounded-full text-xs font-semibold uppercase tracking-wide`}
                        >
                          {resident.displayStatus}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-200">
                        {resident.displayNextDue}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
              <p>
                Menampilkan{" "}
                <span className="font-semibold text-white">
                  {showingFrom === 0 && showingTo === 0
                    ? "0"
                    : `${showingFrom}-${showingTo}`}
                </span>{" "}
                dari {filteredResidents.length} warga
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-300 disabled:cursor-not-allowed disabled:border-white/5 disabled:text-slate-500"
                >
                  Sebelumnya
                </button>
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  Halaman {currentPage} dari {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-300 disabled:cursor-not-allowed disabled:border-white/5 disabled:text-slate-500"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
