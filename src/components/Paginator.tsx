"use client";
import Link from "next/link";

const Paginator = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  return (
    <>
      <Link href={"/interests?page=1"}>&lt;&lt;</Link>
      {page - 1 >= 1 && (
        <Link href={`/interests?page=${page >= 1 ? page - 1 : page}`}>
          &lt;
        </Link>
      )}

      {page - 2 >= 1 && (
        <Link href={`/interests?page=${page - 2 >= 1 ? page - 2 : page}`}>
          {page - 2 >= 1 ? page - 2 : page}
        </Link>
      )}

      {page - 1 >= 1 && (
        <Link href={`/interests?page=${page - 1 >= 1 ? page - 1 : page}`}>
          {page - 1 >= 1 ? page - 1 : page}
        </Link>
      )}

      <Link href={`/interests?page=${page}`} className="text-black">
        {page}
      </Link>
      {page + 1 < totalPages && (
        <Link href={`/interests?page=${page + 1}`}>{page + 1}</Link>
      )}
      {page + 2 < totalPages && (
        <Link href={`/interests?page=${page + 2}`}>{page + 2}</Link>
      )}

      {page + 3 < totalPages && <span>...</span>}

      {page + 1 < totalPages && (
        <Link href={`/interests?page=${page + 1}`}>&gt;</Link>
      )}
      <Link href={`/interests?page=${totalPages}`}>&gt;&gt;</Link>
    </>
  );
};

export default Paginator;
