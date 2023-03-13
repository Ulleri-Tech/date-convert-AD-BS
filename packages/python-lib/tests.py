import unittest
from dateconvert import DateConvert


class TestDateConvert(unittest.TestCase):
    def setUp(self):
        self.converter = DateConvert()

    def test_ad_to_bs(self):
        # Test for valid AD date
        bs_date = self.converter.ad_to_bs(
            year=1993, month=5, day=29)
        self.assertEqual(bs_date, "2050-03-15")

        # Test for invalid AD Year
        bs_date = self.converter.ad_to_bs(
            year=1940, month=11, day=17)
        self.assertEqual(str(bs_date), "Invalid Date out of range.")

        # Test for invalid AD month
        bs_date = self.converter.ad_to_bs(
            year=2000, month=12, day=2)
        self.assertEqual(str(bs_date), "Month must be between 0 and 11.")

        # Test for invalid AD day
        bs_date = self.converter.ad_to_bs(
            year=2000, month=1, day=32)
        self.assertEqual(str(bs_date), "Day must be between 1 and 31.")

    def test_bs_to_ad(self):
        # Test for valid BS date
        ad_date = self.converter.bs_to_ad(year=2050, month=2, day=15)
        self.assertEqual(ad_date, "1993-06-29")

        # Test for invalid BS Year
        bs_date = self.converter.bs_to_ad(
            year=1945, month=10, day=7)
        self.assertEqual(str(bs_date), "Invalid Date out of range.")

        # Test for invalid BS month
        bs_date = self.converter.bs_to_ad(
            year=2001, month=12, day=2)
        self.assertEqual(str(bs_date), "Month must be between 0 and 11.")

        # Test for invalid BS day
        bs_date = self.converter.bs_to_ad(
            year=2000, month=1, day=34)
        self.assertEqual(str(bs_date), "Day must be between 1 and 33.")


if __name__ == '__main__':
    unittest.main()
