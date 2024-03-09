const Footer = () => {
  return (
    <footer className="mt-10 px-4 py-6 sm:px-6">
      <div className="text-center text-sm text-gray-500">
        <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          {" "}
          bonaventurabs -
        </span>{" "}
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
