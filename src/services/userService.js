const fetchUser = async (user, users, setLoading, setUsers) => {
  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();
  setLoading(false);
  if (data.message) {
    alert('user not found!');
    return setUsers([...users]);
  }
  return setUsers([...users, data]);
};

export { fetchUser };
