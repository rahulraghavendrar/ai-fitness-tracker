import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "../lib/supabase";

import {
  useAuth,
} from "../context/AuthContext";

export function useProfile() {

  const { user } = useAuth();

  const [profile, setProfile] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    if (!user) return;

    const fetchProfile =
      async () => {

        const {
          data,
          error,
        } =
          await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        if (!error) {
          setProfile(data);
        }

        setLoading(false);
      };

    fetchProfile();

  }, [user]);

  return {
    profile,
    loading,
  };
}