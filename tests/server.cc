#include "acutest.h"

void test_example(void)
{
    void* mem;
    int a, b;

    mem = malloc(10);
    TEST_ASSERT(mem != NULL);

    mem = realloc(mem, 20);
    TEST_ASSERT(mem != NULL);
}
