function Plus(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z"
        fill="#7E9AB0"
      />
      <path d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="#7E9AB0" />
    </svg>
  );
}

export default Plus;
