-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doubts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can see their own profile and public profiles
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

-- Courses: Published courses are viewable by all
CREATE POLICY "Published courses are viewable"
  ON public.courses FOR SELECT
  USING (is_published = true OR teacher_id = auth.uid());

CREATE POLICY "Teachers can create courses"
  ON public.courses FOR INSERT
  WITH CHECK (teacher_id = auth.uid() OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- Enrollments: Users can see their own enrollments
CREATE POLICY "Users can see own enrollments"
  ON public.enrollments FOR SELECT
  USING (student_id = auth.uid());

CREATE POLICY "Users can enroll in courses"
  ON public.enrollments FOR INSERT
  WITH CHECK (student_id = auth.uid());

-- Tests: Published tests are viewable
CREATE POLICY "Published tests are viewable"
  ON public.tests FOR SELECT
  USING (true);

-- Attempts: Users can see own attempts
CREATE POLICY "Users can see own attempts"
  ON public.attempts FOR SELECT
  USING (student_id = auth.uid());

CREATE POLICY "Users can create attempts"
  ON public.attempts FOR INSERT
  WITH CHECK (student_id = auth.uid());

-- Results: Users can see own results
CREATE POLICY "Users can see own results"
  ON public.results FOR SELECT
  USING (student_id = auth.uid());

-- Notices: All published notices are viewable
CREATE POLICY "Published notices are viewable"
  ON public.notices FOR SELECT
  USING (is_published = true);
